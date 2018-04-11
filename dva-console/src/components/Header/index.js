import React,{Component} from 'react';
import { Menu, Dropdown, Row, Col, Icon, Popover } from 'antd';
import styles from './index.css'

class Header extends Component{
	constructor(props){
		super(props)
		this.state = {
			
		}
	}

	searchData(){
		console.log(this.refs.inp.value)
	}

	render(){
		const menu = (
			<Menu>
				<Menu.Item key="0">
					<a href="#">1st menu item</a>
				</Menu.Item>
				<Menu.Item key="1">
					<a href="##">2nd menu item</a>
				</Menu.Item>
				<Menu.Divider />
				<Menu.Item key="3">3d menu item</Menu.Item>
			</Menu>
			);
		const content = {
			search:(
				<div>
					<input placeholder="搜索" ref="inp"/>
					<Icon type="enter" onClick={this.searchData.bind(this)}/>
				</div>
				),
			bell:(
				<div>
					<div>
						<span>站内消息通知</span>
						<span><a href="##" className={styles.bellA}>消息接收管理</a></span>
					</div>
					<div>
						<span>您暂时没有站内消息</span>
						<span><a href="##" className={styles.bellA}>查看信息</a></span>
					</div>
				</div>
				),
			cost:(
				<div>
					<div>						
						<a href="##" className={styles.headerA}>充值</a>
					</div>
					<div>						
						<a href="##" className={styles.headerA}>订单</a>
					</div>
					<div>						
						<a href="##" className={styles.headerA}>发票</a>
					</div>
					<div>						
						<a href="##" className={styles.headerA}>消费记录</a>
					</div>
					<div>						
						<a href="##" className={styles.headerA}>续费管理</a>
					</div>
					<div>						
						<a href="##" className={styles.headerA}>进入费用中心</a>
					</div>
				</div>
				),
			workOrder:(
				<div>
					<div>					
						<a href="##" className={styles.headerA}>我的工单</a>
					</div>
					<div>
						<a href="##" className={styles.headerA}>提交工单</a>
					</div>
				</div>
				),
			record:(
				<div>
					<div>					
						<a href="##" className={styles.headerA}>备案服务号申请</a>
					</div>
					<div>
						<a href="##" className={styles.headerA}>备案服务号管理</a>
					</div>
					<div>
						<a href="##" className={styles.headerA}>备案专区</a>
					</div>
					<div>
						<a href="##" className={styles.headerA}>ICP备案系统</a>
					</div>
				</div>
				),
			support:(
				<div>
					<div>					
						<a href="##" className={styles.headerA}>帮助与文档</a>
					</div>
					<div>
						<a href="##" className={styles.headerA}>提交建议</a>
					</div>
					<div>
						<a href="##" className={styles.headerA}>论坛</a>
					</div>
					<div>
						<a href="##" className={styles.headerA}>博客</a>
					</div>
				</div>
				),
			user:(
				<div>							
					<div>
						<a href="##" className={styles.userA}>
							<Icon type="file-text" />
							<p>基本资料</p>
						</a>
						<a href="##" className={styles.userA}>
							<Icon type="user" />
							<p>实名认证</p>
						</a>
						<a href="##" className={styles.userA}>
							<Icon type="setting" />
							<p>安全设置</p>	
						</a>
					</div>
					<div>
						<a href="##" className={styles.userA}>
							<Icon type="lock" />
							<p>安全管控</p>	
						</a>
						<a href="##" className={styles.userA}>
							<Icon type="solution" />
							<p>访问控制</p>	
						</a>
						<a href="##" className={styles.userA}>
							<Icon type="star" />
							<p>accesskeys</p>	
						</a>
					</div>
					<div>
						<a href="##" className={styles.userA}>
							<Icon type="team" />
							<p>会员权益</p>	
						</a>
						<a href="##" className={styles.userA}>
							<Icon type="line-chart" />
							<p>会员积分</p>	
						</a>
						<a href="##" className={styles.userA}>
							<Icon type="cloud-upload-o" />
							<p>云大使管理</p>	
						</a>
					</div>
					<div className={styles.userFooter}>
						<a href="##" className={styles.headerA}>退出管理控制台</a>
					</div>
				</div>
				),
			chinese:(
				<div>							
					<a href="##" className={styles.headerA}>简体中文</a>
				</div>
				)
		};
		return (
			<div className={styles.wrap}>
				<Row>
					<Col span={6}>
						<div className={styles.flexWrap}>
							<a href="##" className={styles.aWrap}>
								<Icon type="aliwangwang-o" style={{ fontSize: 16}} />
							</a>
							<a href="##" className={styles.aWrap}>管理控制台</a>
							<div className={styles.aWrap}>
								<Dropdown overlay={menu} trigger={['click']} className={styles.aWrap}>
									<a className={styles.aWrap} href="#">
										产品与服务 <Icon type="down" />
									</a>
								</Dropdown>
							</div>
						</div>
					</Col>
					<Col span={12} offset={6}>
						<div className={styles.flexWrap}>
							<div className={styles.aWrap}>
								<Popover content={content.search}>
									<a href="##" className={styles.aWrap}>
										<Icon type="search" /> 搜索
									</a>
								</Popover>
							</div>
							<div className={styles.aWrap}>
								<Popover content={content.bell}>
									<a href="##" className={styles.aWrap}><Icon type="bell" /></a>
								</Popover>
							</div>
							<div className={styles.aWrap}>
								<Popover content={content.cost}>
									<a className={styles.aWrap} href="#">费用</a>
								</Popover>
							</div>
							<div className={styles.aWrap}>
								<Popover content={content.workOrder}>
									<a className={styles.aWrap} href="#">工单</a>
								</Popover>
							</div>
							<div className={styles.aWrap}>
								<Popover content={content.record}>
									<a className={styles.aWrap} href="#">备案</a>
								</Popover>
							</div>
							<div className={styles.aWrap}>
								<Popover content={content.support}>
									<a className={styles.aWrap} href="#">支持</a>
								</Popover>
							</div>
							<div className={styles.aWrap}>
								<Popover content={content.user}>
									<a className={styles.aWrap} href="#">用户名</a>
								</Popover>
							</div>
							<div className={styles.aWrap}>
								<Popover content={content.chinese}>
									<a className={styles.aWrap} href="#">简体中文</a>
								</Popover>
							</div>
						</div>
					</Col>
				</Row>
			</div>
			)
	}
}

export default Header;

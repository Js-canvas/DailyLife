import React,{Component} from 'react';
import { Menu, Icon, Button  } from 'antd';
import styles from './index.css'
import { Link } from 'react-router'

class SiderContent extends Component{
	constructor(props){
		super(props)
		this.state = {
 
 		}
	}

	toggleCollapsed (){
		this.props.updateState({collapsibleFlag:!this.props.collapsibleFlag})
	}

	render(){
		const SubMenu = Menu.SubMenu;
		const { collapsibleFlag } = this.props;
		return(
			<div className={styles.siderWrap}>					
				<Menu
					defaultSelectedKeys={['1']}
					mode="inline"
					theme="dark"
					inlineCollapsed={collapsibleFlag}
				>
					<Menu.Item key="0" className={styles.siderBtn} >
						<div onClick={this.toggleCollapsed.bind(this)}>
							<Icon type={collapsibleFlag ? 'menu-unfold' : 'menu-fold'}  />
							<span className={collapsibleFlag ? styles.wordHidden :styles.wordShow}>Change</span>
						</div>
					</Menu.Item>
					<Menu.Item key="1">
						<Link to="/echart">
							<Icon type="pie-chart" />
							<span>用户图表</span>
						</Link>
					</Menu.Item>
					<Menu.Item key="2">
						<Link to="/userinfo">
							<Icon type="desktop" />
							<span>用户信息</span>
						</Link>
					</Menu.Item>
					<Menu.Item key="3">
						<Icon type="inbox" />
						<span>Option 3</span>
					</Menu.Item>
					<SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
						<Menu.Item key="5">Option 5</Menu.Item>
						<Menu.Item key="6">Option 6</Menu.Item>
						<Menu.Item key="7">Option 7</Menu.Item>
						<Menu.Item key="8">Option 8</Menu.Item>
					</SubMenu>
					<SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
						<Menu.Item key="9">Option 9</Menu.Item>
						<Menu.Item key="10">Option 10</Menu.Item>
						<SubMenu key="sub3" title="Submenu">
							<Menu.Item key="11">Option 11</Menu.Item>
							<Menu.Item key="12">Option 12</Menu.Item>
						</SubMenu>
					</SubMenu>
				</Menu>
			</div>
			)
	}
}

export default SiderContent;

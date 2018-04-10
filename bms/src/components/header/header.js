import React,{Component} from 'react'
import styles from './header.css'
import {Menu,Icon,Dropdown} from 'antd'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Header extends Component{
	constructor(props){
		super(props)
		this.state = {

		}
	}
	render(){
		const menu = (
				<Menu>
					<Menu.Item>
						<a href="#/userMessage">用户管理</a>
					</Menu.Item>
					<Menu.Item>
						<a href="#/userOnline">消息中心</a>
					</Menu.Item>
					<Menu.Item>
						<a href="#/">用户反馈</a>
					</Menu.Item>
				</Menu>
			)
		const menu2 = (
				<Menu>
					<Menu.Item>
						<a href="#/">子菜单2-1</a>
					</Menu.Item>
					<Menu.Item>
						<a href="#/">子菜单2-2</a>
					</Menu.Item>
					<Menu.Item>
						<a href="#/">子菜单2-3</a>
					</Menu.Item>
				</Menu>
			)
		const menu3 = (
				<Menu>
					<Menu.Item>
						<a href="#/">子菜单3-1</a>
					</Menu.Item>
					<Menu.Item>
						<a href="#/">子菜单3-2</a>
					</Menu.Item>
					<Menu.Item>
						<a href="#/">子菜单3-3</a>
					</Menu.Item>
				</Menu>
			)
		const menu4 = (
				<Menu>
					<Menu.Item>
						<a href="#/">子菜单4-1</a>
					</Menu.Item>
					<Menu.Item>
						<a href="#/">子菜单4-2</a>
					</Menu.Item>
					<Menu.Item>
						<a href="#/">子菜单4-3</a>
					</Menu.Item>
				</Menu>
			)
		return(
			<div className={styles.headerWrap}>				
				<div className={styles.headerUser}>
					<a href="##" className={styles.headerLogin}>登录</a>
					<a href="##" className={styles.headerExit}>退出</a>
				</div>
				<div className={styles.headerList}>
					<ul>
						<li>
							<Dropdown overlay={menu}>
								<a className="ant-dropdown-link" href="javascript:;">
									客户中心 <Icon type="down" />
								</a>
							</Dropdown>
						</li>
						<li>
							<Dropdown overlay={menu2}>
								<a className="ant-dropdown-link" href="#">
									菜单2 <Icon type="down" />
								</a>
							</Dropdown>
						</li>
						<li>
							<Dropdown overlay={menu3}>
								<a className="ant-dropdown-link" href="#">
									菜单3 <Icon type="down" />
								</a>
							</Dropdown>
						</li>
						<li>
							<Dropdown overlay={menu4}>
								<a className="ant-dropdown-link" href="#">
									菜单4 <Icon type="down" />
								</a>
							</Dropdown>
						</li>
					</ul>						
				</div>
				<div className={styles.headerLogo}>
					<a href="#/">LOGO</a>
				</div>
			</div>
			)
	}
}

export default Header
import React,{Component} from 'react';
import { Menu, Icon, Button  } from 'antd';
import styles from './SiderContent.css'

class SiderContent extends Component{
	constructor(props){
		super(props)
		this.state = {
		    collapsed: false
		}
	}

	toggleCollapsed (){
		this.setState({
			collapsed: !this.state.collapsed,
		});
		this.props.changeCollapsible(!this.state.collapsed)
	}

	render(){
		const SubMenu = Menu.SubMenu;
		return(
			<div className={styles.siderWrap}>					
				<Menu
					defaultSelectedKeys={['1']}
					mode="inline"
					theme="dark"
					inlineCollapsed={this.state.collapsed}
				>
					<Menu.Item key="0" className={styles.siderBtn} >
						<Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.toggleCollapsed.bind(this)} />
						<span className={this.state.collapsed ? styles.wordHidden :styles.wordShow}>Change</span>
					</Menu.Item>
					<Menu.Item key="1">
						<Icon type="pie-chart" />
						<span>Option 1</span>
					</Menu.Item>
					<Menu.Item key="2">
						<Icon type="desktop" />
						<span>Option 2</span>
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

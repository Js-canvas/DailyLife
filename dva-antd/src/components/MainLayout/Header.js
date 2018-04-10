import React,{ Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';

class Header extends Component{
	constructor(props){
		super(props)
		this.state = {
			current: 'home'
		}
	}
	   
	render(){
		return (
			<Menu
				selectedKeys={[this.state.current]}
				mode="horizontal"
				theme="dark"
		    >
			    <Menu.Item key="/users">
			    	<Link to="/users"><Icon type="bars" />Users</Link>
			    </Menu.Item>
			    <Menu.Item key="/">
			    	<Link to="/"><Icon type="home" />Home</Link>
			    </Menu.Item>
			    <Menu.Item key="/404">
			    	<Link to="/page-you-dont-know"><Icon type="frown-circle" />404</Link>
			    </Menu.Item>
			    <Menu.Item key="/antd">
			    	<a href="javascript:;">dva</a>
			    </Menu.Item>
		    </Menu>
			)
	}
}

export default Header;
import React,{Component} from 'react'
import styles from './sider.css'
import {Menu,Icon} from 'antd'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Sider extends Component{
	constructor(props){
		super(props)
		this.state = {
			data:[],
			menuTitle:""
		}
	}
	componentDidMount(){
		var that = this ;
		if(!this.props.basicUrl)return false
		fetch(this.props.basicUrl,{
			method: 'get',
			headers: {
				'Content-Type': 'application/json'
			}}).then(
		    function(response){
		        if(response.status!==200){
		            console.log("存在一个问题，状态码为："+response.status);
		            return;
		        }
		        response.json().then(function(source){
		            that.setState({
		            	data:source.siderData,
		            	menuTitle:source.siderTitle
		            })
		        });
		    }
		)
		.catch(function(err){
		    console.log("Fetch错误:"+err);
		});
		// var xmlhttp ;
		// if (window.XMLHttpRequest){
		// 	xmlhttp=new XMLHttpRequest();
		// }else{
		// 	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		// }
		// xmlhttp.onreadystatechange=function(data){
		// 	if (xmlhttp.readyState==4 && xmlhttp.status==200){
		// 		console.log(JSON.parse(xmlhttp.responseText))
		// 	}
		// }
		// xmlhttp.open("GET","./data/siderData.json",true);
		// xmlhttp.send();
	}
	render(){
		return (
			<div className={styles.siderWrap}>
				<div className={styles.menuTitle}>{this.state.menuTitle}</div>
				<Menu
			        onClick={this.handleClick}
			        style={{ width: 240 }}
			        defaultSelectedKeys={[this.props.menuConfig.defaultSelectedKeys]}
			        defaultOpenKeys={[this.props.menuConfig.defaultOpenKeys]}
			        theme="dark"
			        mode="inline"
			        className={styles.menuContent}
				>{
					this.state.data.map(function(item){
						return(
							<SubMenu key={item.subMenuKey} title={<span><Icon type={item.iconType} /><span>{item.title}</span></span>}>						
								{
									item.menuData.map(function(it){
										return(
											<Menu.Item key={it.menuKey}>
												<a href={it.menuHref}>{it.menuText}</a>
											</Menu.Item>
											)
									})
								}	
							</SubMenu>
							)
					})
				}
			    </Menu>
			</div>
			)			
	}
}

export default Sider
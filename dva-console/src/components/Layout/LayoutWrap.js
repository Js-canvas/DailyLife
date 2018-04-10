import React,{Component} from 'react';
import { Layout } from 'antd';
import Header from '../Header/Header'
import styles from './LayoutWrap.css'
import SiderContent from '../SiderContent/SiderContent'

class LayoutWrap extends Component{
	constructor(props){
		super(props)
		this.state = {
			collapsibleFlag:false
		}
	}

	changeCollapsible(flag){
		this.setState({
			collapsibleFlag:flag
		})
	}

	render(){
		const { Content, Sider } = Layout;
		return (
			<Layout style={{ height:'100%'}}>
				<Header />
				<Layout>
      				<Sider width={240} collapsible={true} trigger={null} collapsed={this.state.collapsibleFlag}>
      					<SiderContent changeCollapsible={this.changeCollapsible.bind(this)}/>
      				</Sider>
      				<Layout className={styles.contentBox}>			       
	      				<Content className={styles.content}>
	      					{this.props.children}
	      				</Content>
      				</Layout>
      			</Layout>
			</Layout>
			)
	}
}

export default LayoutWrap;

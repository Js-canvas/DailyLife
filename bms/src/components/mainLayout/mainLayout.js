import React,{Component} from 'react'
import styles from './mainLayout.css'
import Header from '../header/header.js'
import Sider from '../sider/sider.js'
import Content from '../content/content.js'
import Footer from '../footer/footer.js'


class MainLayout extends Component{
	constructor(props){
		super(props)
		this.state = {

		}
	}
	render(){
		return(
			<div className={styles.wrap}>
				<div className={styles.headerBox}>
					<Header />			
				</div>
				<div className={styles.middleArea}>
					<div className={styles.siderBox}>
						<Sider basicUrl = {this.props.basicUrl} menuConfig = {this.props.menuConfig}/>
					</div>
					<div className={styles.contentBox}>
						<Content>
							{this.props.children}
						</Content>
					</div>
				</div>
				<div className={styles.footerBox}>
					<Footer />
				</div>				
			</div>
			)
	}
}

export default MainLayout
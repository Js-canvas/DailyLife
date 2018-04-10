import React,{Component} from 'react'
import styles from './footer.css'

class Footer extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div className={styles.footerWrap}>
				{"this is footer"}
			</div>
			)
	}
}
export default Footer
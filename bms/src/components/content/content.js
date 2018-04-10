import React,{Component} from 'react'
import styles from './content.css'

class Content extends Component{
	constructor(props){
		super(props)

	}
	render(){
		return (
			<div className={styles.contentWrap}>
				<div className={styles.content}>
					{this.props.children}					
				</div>
			</div>
			)			
	}
}

export default Content
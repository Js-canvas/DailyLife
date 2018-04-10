import React,{Component} from 'react';
import { connect } from 'dva';
import styles from './Users.css';
import MainLayout from  '../components/MainLayout/MainLayout.js' 
import UsersComponent from '../components/Users/Users';

class Users extends Component {
	constructor(props){
		super(props)
		this.state = {

		}
	}

	render(){
		return (
		  	<MainLayout>
			  	<div className={styles.normal}>
				  	<UsersComponent/>
			  	</div>
		    </MainLayout>
		 );
	}
  
}


export default connect()(Users);

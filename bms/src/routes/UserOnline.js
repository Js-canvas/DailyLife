import React,{Component} from 'react';
import MainLayout from '../components/mainLayout/mainLayout.js'

const basicUrl = "../../data/messageCenter.json"
const menuConfig = {"defaultSelectedKeys":"1","defaultOpenKeys":"sub1"}

class UserOnline extends Component{
    constructor(props){
      super(props)
      this.state = {
        
      }
    } 
  
  render(){
    return(
          <MainLayout basicUrl = {basicUrl} menuConfig = {menuConfig}>
            <p>hi this is UserOnline</p>
          </MainLayout>
      )
  }
}

UserOnline.propTypes = {
};

export default UserOnline

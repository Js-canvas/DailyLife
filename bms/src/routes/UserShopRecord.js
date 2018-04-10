import React,{Component} from 'react';
import MainLayout from '../components/mainLayout/mainLayout.js'

const basicUrl = "../../data/userManage.json"
const menuConfig = {"defaultSelectedKeys":"2","defaultOpenKeys":"sub1"}

class UserShopRecord extends Component{
    constructor(props){
      super(props)
      this.state = {

      }
    } 
  
  render(){
    return(
          <MainLayout basicUrl = {basicUrl} menuConfig = {menuConfig}>
            <p>hi this is UserShopRecord</p>
          </MainLayout>
      )
  }
}

UserShopRecord.propTypes = {
};

export default UserShopRecord

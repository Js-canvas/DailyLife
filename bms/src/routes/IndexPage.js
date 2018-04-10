import React,{Component} from 'react';
import styles from './IndexPage.css';
import MainLayout from '../components/mainLayout/mainLayout.js'

const basicUrl = "../../data/userManage.json"
const menuConfig = {"defaultSelectedKeys":"1","defaultOpenKeys":"sub1"}

class IndexPage extends Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return(
          <MainLayout basicUrl={basicUrl} menuConfig={menuConfig}>
            <p>hi top wrap content</p>
          </MainLayout>
      )
  }
}

IndexPage.propTypes = {
};

export default IndexPage

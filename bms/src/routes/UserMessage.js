import React,{Component} from 'react';
import MainLayout from '../components/mainLayout/mainLayout.js'
import {Table, Icon, Divider } from 'antd'
import styles from './UserMessage.css';

const basicUrl = "../../data/userManage.json"
const menuConfig = {"defaultSelectedKeys":"1","defaultOpenKeys":"sub1"};
const { Column, ColumnGroup } = Table;

class UserMessage extends Component{
    constructor(props){
      super(props)
      this.state = {
          userData:[]
      }
    } 
    componentDidMount(){
      var that = this ;
      fetch('../../data/userMessage.json',{
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
                    userData:source.data
                  })
            });
          }
      )
      .catch(function(err){
          console.log("Fetch错误:"+err);
      });
    }
  render(){
    return(
          <MainLayout basicUrl = {basicUrl} menuConfig = {menuConfig}>
            <div className={styles.userMessageWrap}>
              <Table dataSource={this.state.userData} pagination={{ pageSize: 4 }}>
                <Column 
                  title="Name"
                  dataIndex="name"
                  key="name"
                />
                <Column
                  title="Age"
                  dataIndex="age"
                  key="age"
                />
                <Column
                  title="Address"
                  dataIndex="address"
                  key="address"
                />
                <Column
                  title="Action"
                  key="action"
                  render={(text, record) => (
                    <span>
                      <a href="##">Action 一 {record.name}</a>
                      <Divider type="vertical" />
                      <a href="##">Delete</a>
                      <Divider type="vertical" />
                      <a href="##" className="ant-dropdown-link">
                        More actions <Icon type="down" />
                      </a>
                    </span>
                  )}
                />
              </Table>
            </div>
          </MainLayout>
      )
  }
}

UserMessage.propTypes = {};

export default UserMessage

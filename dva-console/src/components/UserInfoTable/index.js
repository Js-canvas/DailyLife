import React,{ Component } from 'react';
import { Table, Icon, Divider, Button } from 'antd';
import styles from './index.css';
import ModalBox from '../ModalBox';


class UserInfoTable extends Component{
	constructor(props){
		super(props)
		this.state = {
 			current:1
 		}
	}

	operation(text,record) {
    return (
      <div>
        <span className = {styles.tableOperation} onClick = {this.editDetail.bind(this,record)}>编辑</span>
        <span className = "ant-divider"></span>
        <span className = {styles.tableOperation} onClick = {this.deleteDetail.bind(this,record)}>删除</span>
      </div>
      )
  }

  editDetail(record){
    this.props.updateState({
      visible:true,
      currentType:0,
      choosedUser:record
    });
  }

  deleteDetail(record){
    this.props.getUserList({
      userInfo:record,
      userTableType:'delete'
    })
  }

  addHandler(){
    this.props.updateState({
      visible:true,
      currentType:1
    })
  }

  paginationHandler(e){
    this.setState({
      current:e
    })
  }

	render(){
		const { usersListData } = this.props;

    const columns = [{
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    }, {
      title: '操作',
      dataIndex: 'operation',
      render: this.operation.bind(this)
    }];

    const paginationConfig = {
      pageSize:7,
      current:this.state.current,
      onChange:this.paginationHandler.bind(this)
    }

    return (
      <div className = {styles.tableBox}>
        <Button type="primary" className = {styles.addBtn} onClick = {this.addHandler.bind(this)}>添加</Button>
        <Table dataSource = {usersListData} columns = {columns} pagination = {paginationConfig}/>
        <ModalBox {...this.props}/>
      </div>
      )
  }
}

export default UserInfoTable;

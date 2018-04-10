import React , { Component } from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Table , Button } from 'antd';
import { NAMESPACE } from '../models/indexPage/constants'
import * as MODALNAMESPACE from '../models/modalBox/constants'
import PropTypes from 'prop-types';
import ModalBox from './ModalBox'

const mapStateToProps = (state) => ({
  ...state[NAMESPACE],
  ...state[MODALNAMESPACE.NAMESPACE]
}) 

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  getDefaultList(params, cb) {
    dispatch({
      type:`${NAMESPACE}/getDefaultList`,
      payload: {
        params: params,
        dispatch:dispatch,
        cb: cb
      }
    })
  },
  updateState(state) {
    dispatch({
      type:`${NAMESPACE}/updateState`,
      payload: state
    })
  },
  updateModalState(state) {
    dispatch({
      type:`${MODALNAMESPACE.NAMESPACE}/updateModalState`,
      payload: state
    })
  },
  editUserInfo(params, cb){
    dispatch({
      type:`${MODALNAMESPACE.NAMESPACE}/editUserInfo`,
      payload: {
        params: params,
        dispatch:dispatch,
        cb: cb
      }
    })
  }
})

const Column = Table.Column;

class IndexPage extends Component {

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
    this.props.updateModalState({
      visible:true,
      currentType:0
    });
    this.props.updateState({
      choosedUser:record
    })
  }

  deleteDetail(record){
    this.props.editUserInfo({
      userInfo:record,
      operationType:'delete'
    })
  }

  addHandler(){
    this.props.updateModalState({
      visible:true,
      currentType:1
    })
  }

  componentWillMount(){

  }

  componentDidMount(){
    this.props.getDefaultList({})
  }

  paginationHandler(e){
    this.setState({
      current:e
    })
  }

  render(){
    const { usersListData,choosedUser } = this.props;
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
      pageSize:5,
      current:this.state.current,
      onChange:this.paginationHandler.bind(this)
    }

    return (
      <div className = {styles.tableBox}>
        <Button type="primary" className = {styles.addBtn} onClick = {this.addHandler.bind(this)}>添加</Button>
        <Table dataSource = {usersListData} columns = {columns} pagination = {paginationConfig}/>
        <ModalBox choosedUser={choosedUser}/>
      </div>
      )
  }
}

IndexPage.propTypes = {

};

export default connect(mapStateToProps,mapDispatchToProps)(IndexPage);

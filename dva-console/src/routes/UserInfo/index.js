import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './index.css';
import { NAMESPACE } from '../../models/userInfo/constants'
import LayoutWrap from '../../components/LayoutWrap';
import UserInfoTable from '../../components/UserInfoTable';

const mapStateToProps = (state) => ({
  ...state[NAMESPACE]
})

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  updateState(state) {
    dispatch({
      type:`${NAMESPACE}/updateState`,
      payload: state
    })
  },
  getUserList (params,cb) {
    dispatch({
      type:`${NAMESPACE}/getUserList`,
      payload: {
        params: params,
        dispatch:dispatch,
        cb: cb
      }
    })
  }
})

class UserInfo extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  componentDidMount(){
    this.props.getUserList({
      userTableType:'get'
    })
  }

  render(){
    return (
      <LayoutWrap>
        <UserInfoTable {...this.props} />
      </LayoutWrap>
    );
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(UserInfo);

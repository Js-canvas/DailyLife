import React , { Component } from 'react';
import { Modal, Button } from 'antd';
import { connect } from 'dva';
import { NAMESPACE } from '../models/modalBox/constants';
import PropTypes from 'prop-types';
import styles from './modalBox.css';

const mapStateToProps = (state) => ({
  ...state[NAMESPACE]
}) 

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  updateModalState(state) {
    dispatch({
      type:`${NAMESPACE}/updateModalState`,
      payload: state
    })
  },
  editUserInfo(params, cb) {
    dispatch({
      type:`${NAMESPACE}/editUserInfo`,
      payload: {
        params: params,
        dispatch:dispatch,
        cb: cb
      }
    })
  },
  getCurrentListLength(params, cb) {
    dispatch({
      type:`${NAMESPACE}/getCurrentListLength`,
      payload: {
        params: params,
        dispatch:dispatch,
        cb: cb
      }
    })
  }
})
  


class ModalBox extends Component {
  constructor(props){
    super(props)
    this.state = { 
      name:'',
      age:'',
      address:''
    }
  }
  
  componentDidMount(){
    this.props.getCurrentListLength();
  }

  componentWillReceiveProps(nextProps){
    const { currentType } = nextProps;
    if(currentType==0){
        this.setState({
          name:nextProps.choosedUser.name,
          age:nextProps.choosedUser.age,
          address:nextProps.choosedUser.address
        })
    }else{
        this.setState({
          name:'',
          age:'',
          address:''
        })
    }
  }

  handleOk = () => {
    const { updateModalState, editUserInfo, listLength, currentType } = this.props;
    
    const inputFlag = this.inputRegular();

    if(!inputFlag) return false

    if(currentType){

      // add
      
      let newUserInfo = Object.assign({key:listLength+1},this.state)

      this.props.updateModalState({
        loading:true
      })

      setTimeout(() => {
        updateModalState({ loading: false, visible: false });
      }, 1000);

      editUserInfo({
        userInfo:newUserInfo,
        operationType:'add'
      })

    }else{

      // edit
      
      let newUserInfo = Object.assign(this.props.choosedUser,this.state)

      this.props.updateModalState({
        loading:true
      })

      setTimeout(() => {
        updateModalState({ loading: false, visible: false });
      }, 1000);

      editUserInfo({
        userInfo:newUserInfo,
        operationType:'edit'
      })
    }
  }

  handleCancel = () => {
    this.props.updateModalState({
      visible:false
    })
  }

  changeHandler = (e) => {
    switch (e.target.id) {
      case 'name':
        this.setState({name: e.target.value});
        break;

      case 'age':
        this.setState({age: e.target.value});
        break;

      case 'address':
        this.setState({address: e.target.value});
        break;

      default:
        break;
    }
  }

  inputRegular(){
    let { name, age, address } = this.state;
    let flag = false;
    if(name&&age&&address){
      if(/^(?:[1-9]?\d|100)$/.test(age)){
        flag = true;
      }else{
        console.log('age is not num')
      }
    }else{
      console.log('has null')
    }
    return flag
  }

  render(){
    const { visible,loading } = this.props;
    return (
      <div>
        <Modal
          visible={visible}
          title="Title"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          maskClosable={false}
          footer={[
            <Button key="back" onClick={this.handleCancel}>Return</Button>,
            <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
              Submit
            </Button>,
          ]}
        >
          <div className={styles.inputBox}>
            <label htmlFor="name">姓名：</label>
            <input id="name" value={this.state.name} onChange={this.changeHandler.bind(this)} />
          </div>
          <div className={styles.inputBox}>
            <label htmlFor="age">年龄：</label>
            <input id="age" value={this.state.age} onChange={this.changeHandler.bind(this)} />
          </div>
          <div className={styles.inputBox}>
            <label htmlFor="address">地址：</label>
            <input id="address" value={this.state.address} onChange={this.changeHandler.bind(this)} />
          </div>
        </Modal>
      </div>
    )
  }
}

ModalBox.propTypes = {

};
export default connect(mapStateToProps,mapDispatchToProps)(ModalBox); 
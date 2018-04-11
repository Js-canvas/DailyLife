import React , { Component } from 'react';
import { Modal, Button } from 'antd';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import styles from './index.css';

class ModalBox extends Component {
  constructor(props){
    super(props)
    this.state = { 
      name:'',
      age:'',
      address:''
    }
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
    const { updateState, getUserList, listLength, currentType, choosedUser } = this.props;
    
    const inputFlag = this.inputRegular();

    if(!inputFlag) return false

    if(currentType){

      // add
      
      let newUserInfo = Object.assign({key:listLength+1},this.state)

      this.props.updateState({
        loading:true
      })

      setTimeout(() => {
        updateState({ loading: false, visible: false });
      }, 1000);

      getUserList({
        userInfo:newUserInfo,
        userTableType:'add'
      })

    }else{

      // edit
      
      let newUserInfo = Object.assign(choosedUser,this.state)

      this.props.updateState({
        loading:true
      })

      setTimeout(() => {
        updateState({ loading: false, visible: false });
      }, 1000);

      getUserList({
        userInfo:newUserInfo,
        userTableType:'edit'
      })
    }
  }

  handleCancel = () => {
    this.props.updateState({
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
export default connect()(ModalBox); 
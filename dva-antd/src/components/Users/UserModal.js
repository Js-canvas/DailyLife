import React, { Component } from 'react';
import { Modal, Form, Input, Popconfirm } from 'antd';
import mashupcloud from '../../mashupcloud';

const FormItem = Form.Item;

class UserEditModal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            visible:false,
            newKey:''
        }
    }
    showModal = () => {
        this.setState({
            visible: true
        });
    }
    handleOk = (e) => {
        this.setState({
            visible: false
        });
        setTimeout(function(){
            switch(this.props.innerText){
                case 'Edit':
                    var data = {
                        appid:mashupcloud.appid,
                        token:mashupcloud.token,
                        keyId:this.props.keyId,
                        name:this.props.form.getFieldValue('name')||"error",
                        email:this.props.form.getFieldValue('email')||"error",
                        website:this.props.form.getFieldValue('website')||"error",
                        operation:''
                    }
                    var showData = {
                        keyId:this.props.keyId,
                        name:this.props.form.getFieldValue('name')||"error",
                        email:this.props.form.getFieldValue('email')||"error",
                        website:this.props.form.getFieldValue('website')||"error",
                        operation:'',
                        key:this.props.keyId,
                        id:this.props.keyId
                    }
                    $.ajax({
                        type:'get',
                        url:"http://v2.mashupcloud.cn/EDIT/User/"+this.props.dataId+"/",
                        data:data,
                        success: function(json){                                                        
                            this.props.editData("EDIT",this.props.keyId-1,showData)                                                    
                        }.bind(this),
                        error: function(json){                                                        
                            console.log("err:"+json);                                                        
                        }
                    });
                break;

                case 'Add':
                    var data = {
                        appid:mashupcloud.appid,
                        token:mashupcloud.token,
                        name:this.props.form.getFieldValue('name')||"error",
                        email:this.props.form.getFieldValue('email')||"error",
                        website:this.props.form.getFieldValue('website')||"error",
                        key:this.props.dataLength+1,
                        keyId:this.props.dataLength+1,
                        operation:''
                    }
                    var showData = {
                        id:this.props.dataLength+1,
                        name:this.props.form.getFieldValue('name')||"error",
                        email:this.props.form.getFieldValue('email')||"error",
                        website:this.props.form.getFieldValue('website')||"error",
                        key:this.props.dataLength+1,
                        keyId:this.props.dataLength+1,
                        operation:''
                    }
                    $.ajax({
                        type:'get',
                        url:"http://v2.mashupcloud.cn/ADD/User/",
                        data:data,
                        success: function(json){   
                            this.props.editData("ADD",this.props.dataLength+1,showData)                                        
                        }.bind(this),
                        error: function(json){                                                        
                            console.log("err:"+json);                                                        
                        }
                    });
                break;

                case 'Delete':
                    this.props.editData("DELETE",this.props.dataId,{})  
                    $.ajax({
                        type:'get',
                        url:"http://v2.mashupcloud.cn/DELETE/User/"+this.props.dataId+"/",
                        data:{
                            appid: mashupcloud.appid,
                            token: mashupcloud.token
                        },
                        success: function(json){                          

                        },
                        error: function(json){
                            console.log("err:"+json);
                        }
                    });
                break;

                default :
                break;
            }
        }.bind(this),50)
    }
    handleCancel = (e) => {
        this.setState({
            visible: false
        });
    }
    render() {
        const {formItemLayout} = {
            labelCol: { span: 4 },
            wrapperCol: { span: 8 },
        };
        const { getFieldDecorator } = this.props.form;
        if(this.props.innerText=="Delete"){
            return (
                <span>
                    <Popconfirm title="Are you sure delete this task?" onConfirm={this.handleOk} onCancel={this.handleCancel} okText="Yes" cancelText="No">
                        {this.props.children}
                    </Popconfirm>
                </span>
            )
        }else{
            return (
                <span>
                    <span onClick = {this.showModal.bind(this)}>
                        {this.props.children}
                    </span>
                    <Modal
                        key={this.state.newKey}
                        title={this.props.innerText}
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                    >
                        <FormItem {...formItemLayout} label="Name">
                            {getFieldDecorator('name', {
                                rules: [{
                                    required: true,
                                    message: 'Please input your name',
                                }]
                            })(
                                  <Input placeholder="Please input your name" />
                            )}
                        </FormItem>
                       <FormItem {...formItemLayout} label="Email">
                            {getFieldDecorator('email', {
                                rules: [{
                                    required: true,
                                    message: 'Please input your email',
                                }],
                              })(
                                    <Input placeholder="Please input your email" />
                            )}
                        </FormItem>
                        <FormItem {...formItemLayout} label="Website">
                            {getFieldDecorator('website', {
                                rules: [{
                                    required: true,
                                    message: 'Please input your website',
                                }]
                            })(
                                  <Input placeholder="Please input your website" />
                            )}
                        </FormItem>
                    </Modal>
                </span>
            );
        }

        
    }
}

export default Form.create()(UserEditModal);

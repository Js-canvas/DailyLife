import React,{Component} from 'react';
import { connect } from 'dva';
import { Table, Button} from 'antd';
import { routerRedux } from 'dva/router';
import styles from './Users.css';
import { PAGE_SIZE } from '../../constants';
import UserModal from './UserModal';
import mashupcloud from '../../mashupcloud.js'

class Users extends Component {
    constructor(props){
        super(props);
        this.state ={
            modalVisible:false,
            total:10,
            current:1,
            dataSource:[],
            data:[],
            loadFlag:false,
            pagination:{}
        }
    }
    pageChangeHandler(page){
        this.setState({
            loadFlag:true
        })
        setTimeout(function(){
            this.state.pagination.current = page
            var paper = {...this.state.pagination}
            this.setState({
                loadFlag:false,
                pagination:paper
            })
        }.bind(this), 1500)
    }
    editData(type,id,newData){  
        switch (type) {
            case 'ADD':
                this.setState({
                    loadFlag:true
                })
                setTimeout(function(){
                    var arr = this.state.dataSource
                    arr.push(newData);
                    this.setState({   
                        dataSource:arr,                   
                        loadFlag:false
                    })
                }.bind(this), 1500)
                break;

            case 'EDIT':
                this.setState({
                    loadFlag:true
                })
                setTimeout(function(){
                    var arr = this.state.dataSource
                    arr[id]=newData;      
                    this.setState({    
                        dataSource:arr,                  
                        loadFlag:false
                    })
                }.bind(this), 1500)
                break;

            case 'DELETE':
                this.setState({
                    loadFlag:true
                })
                setTimeout(function(){
                    var arr = this.state.dataSource
                    for(var i = 0 ; i < arr.length ; i++){
                        if(arr[i].id==id){
                            arr.splice(i,1);
                            break;
                        }
                    }
                    this.setState({    
                        dataSource:arr,                  
                        loadFlag:false
                    })
                }.bind(this), 1500)
                break;
            default :
                break;
        }
        
    }
    componentDidMount(){
        setTimeout(()=>{
          $.ajax({
              type:'get',
              url:"http://v2.mashupcloud.cn/LIST/User/",
              data:{
                  appid:mashupcloud.appid,
                  token:mashupcloud.token,
                  entity:'User'
              },
            success: function(json){
                var data = JSON.parse(json)[2];
                for(var i = 0 ; i<data.length ; i++){
                    data[i].key = i+1
                }
                this.setState({
                    dataSource:data,
                    pagination:{
                        total:data.length,
                        current:1,
                        pageSize:PAGE_SIZE,
                        onChange:this.pageChangeHandler.bind(this)
                    }
                })                                 
            }.bind(this),
            error: function(json) {                                          
                console.log("err:"+json);                                            
            }
          });
        }, 50)
    }
    render(){
        const columns = [{
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        }, {
            title: 'Website',
            dataIndex: 'website',
            key: 'website',
        },{
            title: 'Operation',
            key: 'operation',
            render:(index)=>(
                <span>
                    <UserModal innerText={'Edit'} keyId={index.key} dataId={index.id} editData={this.editData.bind(this)}>
                        <a href='javascript:;'>Edit</a>
                    </UserModal>
                    <span className="ant-divider" />
                    <UserModal innerText={'Delete'} keyId={index.key} dataId={index.id} editData={this.editData.bind(this)}>
                        <a href='javascript:;'>Delete</a>
                    </UserModal>
                </span>
            )
        }];

        return(
            <div className={styles.normal}>
                <div>
                    <div className={styles.create}>
                        <UserModal innerText={'Add'} dataLength={this.state.dataSource.length} editData={this.editData.bind(this)}>
                            <Button type="primary">Add</Button>
                        </UserModal>
                    </div>
                    <Table
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={this.state.pagination}
                        loading={this.state.loadFlag}
                    />
                </div>
            </div>
        )
    }
}

export default connect()(Users)


import React,{ Component } from 'react';
import styles from './MainLayout.js.css';
import Header from './Header';

class MainLayout extends Component{
    constructor(props){
       super(props)
       this.state = {
            mashupcloud:window.localStorage.getItem('mashupcloud')
       }
    }
    componentDidMount(){
        console.log(this.state.mashupcloud)
    }
    // componentDidMount(){
    //     $.ajax({
    //         type:'get',
    //         async:true,
    //         url:"http://v2.mashupcloud.cn/developer/auth.do",
    //         data:{
    //             appkey:'zrTlQJVObtgiOUAhfhruLlOVisfFVStn' ,
    //             appsecret: 'WHesWOyIfybHYEpKByEIkcsmkqyUsdMV'
                                            
    //         },
    //         success: function(json){
    //             json = JSON.parse(json)                                  
    //             this.setState({
    //                 mashupcloud:{
    //                     token:json[1],
    //                     appid:json[2]
    //                 }
    //             })
    //             console.log(json)
                
    //         }.bind(this),
    //         error: function(json){                                      
    //             console.log("err:"+json);                                       
    //         }
    //     });
    //     console.log(this)
    // }
    render(){
        return (
            <div className={styles.normal}>
                <Header/>
                <div className={styles.content}>
                    <div className={styles.main}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default MainLayout;

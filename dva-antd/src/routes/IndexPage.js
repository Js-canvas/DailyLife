import React,{ Component } from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import MainLayout from  '../components/MainLayout/MainLayout.js'

class IndexPage extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
          <MainLayout>
              <div className={styles.normal}>
                  <h1 className={styles.title}>Yay! Welcome to dva!</h1>
                  <div className={styles.welcome}></div>    
                  <ul className={styles.list}>
                      <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
                      <li><a href="javascript:;">Getting Started</a></li>
                  </ul>
              </div>
          </MainLayout>
        )
    }
}


export default connect()(IndexPage);

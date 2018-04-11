import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './index.css';
import LayoutWrap from '../../components/LayoutWrap';
import Echart from '../../components/Echart';

class IndexPage extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  render(){
    return (
      <LayoutWrap>
        <Echart />
      </LayoutWrap>
    );
  }
}


export default connect()(IndexPage);

import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import LayoutWrap from '../components/Layout/LayoutWrap';
import Index from '../components/IndexPage/IndexPage';

function IndexPage() {
  return (
    <LayoutWrap>
 		<Index />
    </LayoutWrap>
  );
}


export default connect()(IndexPage);

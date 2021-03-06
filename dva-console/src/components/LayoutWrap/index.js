import React,{ Component } from 'react';
import { Layout, Icon } from 'antd';
import { connect } from 'dva';
import { NAMESPACE } from '../../models/layout/constants'
import Header from '../Header'
import styles from './index.css'
import SiderContent from '../SiderContent'

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
})

class LayoutWrap extends Component{
	constructor(props){
		super(props)
		this.state = {

		}
	}

	changeCollapsible(flag){
    this.props.updateState({collapsibleFlag:flag})
	}

  onCollapse = (collapsed) => {
    this.props.updateState({collapsibleFlag:collapsed})
  }

  triggerNode = () => {
    return (
      <div className={styles.triggerNode}>
        <Icon type={this.props.collapsibleFlag ? 'menu-unfold' : 'menu-fold'}  />
      </div>
      )
  }

	render(){
		const { Content, Sider } = Layout;
    const { collapsibleFlag } = this.props;

		return (
			<Layout style={{ height:'100%',width:'100%'}}>
				<Header />
				<Layout>
  				<Sider width={240} collapsible onCollapse={this.onCollapse} collapsed={collapsibleFlag} trigger={this.triggerNode()}>
  					<SiderContent {...this.props} />
  				</Sider>
  				<Layout className={styles.contentBox}>			       
    				<Content className={styles.content}>
    					{this.props.children}
    				</Content>
  				</Layout>
  			</Layout>
			</Layout>
			)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(LayoutWrap);

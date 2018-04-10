import React , { Component } from 'react';
import { connect } from 'dva';
import styles from './Users.css';
import { NAMESPACE } from '../models/users/constants';
import PropTypes from 'prop-types';

const mapStateToProps = (state) => ({
    usersId:state[NAMESPACE].usersId
})

const mapDispatchToProps = (dispatch) => ({
    dispatch,
    getDefaultId(params, cb) {
      dispatch({
        type:`${NAMESPACE}/getDefaultId`,
        payload: {
        params: params,
        dispatch:dispatch,
        cb: cb
        }
      })
    },
    getUserId(state) {
        console.log('yes')
        dispatch({
          type:`${NAMESPACE}/getUserId`,
          payload: state
        })
    }
})

class Users extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount(){
        console.log(this.props)
        this.props.getUserId({
            userId:"user2222"
        })
        this.props.getDefaultId({
          userName:'qqwwee',
          userAge:'12'
        })
    }

    render() {

        const { getUserId , getDefaultId , userId} = this.props;
        
        return (
            <div>
                <span>111</span>
            </div>
            )
    }
}

Users.propTypes = {
  usersId: PropTypes.string.isRequired,
  getUserId: PropTypes.func.isRequired
};

export default connect(mapStateToProps,mapDispatchToProps)(Users);

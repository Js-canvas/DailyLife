import React,{Component} from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  fetch(params,cb) {
    dispatch({
      type:'test/fetch',
      payload:{
        params: params,
        dispatch:dispatch,
        cb: cb
      } 
    })
  }
})

function* testYield(){
  yield 'test1';
  yield 'test2';
  yield 'test3';
  return 'a'
} 

let ty = testYield()

class IndexPage extends Component{
    constructor(props) { // 初始化的工作放入到构造函数
        super(props); // 在 es6 中如果有父类，必须有 super 的调用用以初始化父类信息
        this.state = { // 初始 state 设置方式
            num:0
        };
    }
    addHandler(){
        this.props.dispatch({type: 'test/add',payload:{value:this.state.num}});
    } 
    minusHandler(){
        this.props.dispatch({type: 'test/minus',payload:{value:this.state.num}})
    } 
    mulHandler(){
        this.props.dispatch({type: 'test/mul',payload:{value:this.state.num}})
    } 
    excHandler(){
        this.props.dispatch({type: 'test/exc',payload:{value:this.state.num}})
    } 
    equHandler(){
        let a1 = ty.next();
        console.log(a1)
        let a2 = ty.next();
        console.log(a2)
    }
    changeNum(e){
        let value = e.target.value;
        this.setState({num: value});

    }
    changeHandler(){
        this.props.dispatch({type:'test/change',payload:{value:this.state.num}})
    }

    render(){
      return (
          <div className={styles.normal}>
              <button onClick={this.addHandler.bind(this)}>+</button>
              <button onClick={this.minusHandler.bind(this)}>-</button>
              <button onClick={this.mulHandler.bind(this)}>*</button>
              <button onClick={this.excHandler.bind(this)}>/</button>
              <button onClick={this.equHandler.bind(this)}>=</button>
              <div>
                  <input type="number" onChange={this.changeNum.bind(this)} value={this.state.num} onBlur={this.changeHandler.bind(this)} />
              </div>
              <p>{this.props.num}</p>
          </div>
        );
    }
}



function mapStateToProps(state) {
  const num = state.test
  return {num};
}

export default connect(mapStateToProps,mapDispatchToProps)(IndexPage);

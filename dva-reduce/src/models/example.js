
export default {

  namespace: 'test',

  state: [],

  reducers: {
    change(state,{payload:todo}){
      return parseInt(todo.value)
    },
    add(state,{payload:todo}){
      return state*1+parseInt(todo.value)
    },
    minus(state,{payload:todo}){
      return state*1-parseInt(todo.value)
    },
    mul(state,{payload:todo}){
      return state*parseInt(todo.value)
    },
    exc(state,{payload:todo}){
      return state/parseInt(todo.value)
    },
    equ(state,{payload:todo}){
      return state
    }
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      console.log(payload)
      yield 'test1';
      yield 'test2';
      yield 'test3';
    },
    *remove({ payload: id }, { call, put }) {
      yield call(usersService.remove, id);
      yield put({ type: 'reload' });
    },
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    }
  },

};

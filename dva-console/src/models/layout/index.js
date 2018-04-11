import * as constants from './constants';
import { initState } from '../initState';

export default {

  namespace : constants.NAMESPACE,

  state : initState[constants.NAMESPACE],

  reducers : {
    updateState(state, { payload }) {
      if (payload) {
        return {
          ...state,
          ...payload
        };
      }
      return state;
    }
  },

  effects : {

  },

  subscriptions : {

  }
} 
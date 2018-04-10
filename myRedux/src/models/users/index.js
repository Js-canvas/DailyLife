import * as constants from './constants';
import { initState } from '../initState';

export default {

    namespace : constants.NAMESPACE,

    state : initState[constants.NAMESPACE],

    reducers : {
        getUserId(state, { payload }) {
          console.log(state);
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
      *getDefaultId({ payload: { params = {}, dispatch, cb } }, { call, put}) {
            console.log(params)
        }
    },
    
    subscriptions : {
      
    }
}
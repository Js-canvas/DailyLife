import * as constants from './constants';
import { initState } from '../initState';
import * as userService from '../../services/indexPage'

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
        *getDefaultList({ payload: { params = {}, dispatch, cb } }, { call, put}) {
            try {
              const resData = yield call(userService.getUserListData, params);
              let sourceData = resData.data.data;
              yield put({
                type:'updateState',
                payload:{
                    usersListData:sourceData,
                    listLength:sourceData.length
                }
              })
            } catch(e) {
              console.log(e);
            }
        }
    },
    
    subscriptions : {

    }
}

import * as constants from './constants';
import { initState } from '../initState';
import * as editInfo from '../../services/editInfo'
import * as userService from '../../services/getCurrentListLength'
import * as indexCons from '../indexPage/constants';

export default {

    namespace : constants.NAMESPACE,

    state : initState[constants.NAMESPACE],

    reducers : {
      updateModalState(state, { payload }) {
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
      *editUserInfo({ payload: { params = {}, dispatch, cb } }, { call, put}) {
        const INDEXNAMESPACE = indexCons.NAMESPACE ;
        try {
          const resData = yield call(editInfo.editUserInfo, params);
          console.log(resData)
          yield put({
            type:`${INDEXNAMESPACE}/updateState`,
            payload:{
                usersListData:resData.data.newData
            }
          })
          yield put({
            type:'updateModalState',
            payload:{
              listLength:resData.data.newData.length
            }
          })
        } catch(e) {
          console.log(e);
        }
      },
      *getCurrentListLength({ payload: { params = {}, dispatch, cb } }, { call, put}) {
        try {
          const resData = yield call(userService.getListLength, params);
          yield put({
            type:'updateModalState',
            payload:{
              listLength:resData.data.dataLength
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

import request from '../utils/request';

export async function getUserListData() {
  let time =  new Date().getTime()
  const options = {                      
      method:'GET',   
      mode:'cors'
  }
  return request('/userList?'+time,options);
}

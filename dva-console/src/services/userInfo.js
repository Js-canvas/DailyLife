import request from '../utils/request';

export async function getUserInfo(params) {
  let time =  new Date().getTime();
  const options = {
    method:'GET',   
    mode:'cors'
  }
  return request('/userInfo?data='+params+'&t='+time,options);
}

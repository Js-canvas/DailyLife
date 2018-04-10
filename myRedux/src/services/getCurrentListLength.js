import request from '../utils/request';

export async function getListLength() {
  let time =  new Date().getTime()
  const options = {                      
      method:'GET',   
      mode:'cors'
  }
  return request('/getListLength?'+time,options);
}

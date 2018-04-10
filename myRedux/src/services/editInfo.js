import request from '../utils/request';

export async function editUserInfo(params) {
  console.log(params)
  let time =  new Date().getTime()
  const options = {                      
      method:'GET',   
      mode:'cors',
      headers: {
　　　  'Accept': 'application/json',
　　　  'Content-Type': 'application/json',
　　　}
  }
  return request('/editUserInfo?body='+JSON.stringify(params)+'&&t='+time,options);
}

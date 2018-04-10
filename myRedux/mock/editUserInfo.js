'use strict';

const qs = require('qs');
const mockjs = require('mockjs');  //导入mock.js的模块

const Random = mockjs.Random;  //导入mock.js的随机数

// 数据持久化   保存在global的全局变量中
let tableListData = {};
if (!global.tableListData) {
  const data = mockjs.mock({
    'data|100': [{
      'key|+1': 1,
      'name': () => {
        return Random.cname();
      },
      'age|20-60': 60,
      'address': () => {
        return Random.county(true);
      }
    }],
    page: {
      total: 100,
      current: 1,
    },
  });
  tableListData = data;
  global.tableListData = tableListData;
} else {
  tableListData = global.tableListData;
}

const editTableListData = (changeData) => {
  const arr = tableListData.data;
  changeData.userInfo.key*=1;
  changeData.userInfo.age*=1;

  switch (changeData.operationType) {
    case 'edit':
      for(let i = 0; i < arr.length; i++){
        if(changeData.userInfo.key==arr[i].key){
          arr[i] = Object.assign(arr[i],changeData.userInfo);
          break;
        }else{
          continue;
        }
      }
      break;

    case 'add':
      arr.push(changeData.userInfo);
      break;

    case 'delete':
      for(let i = 0; i < arr.length; i++){
        if(changeData.userInfo.key==arr[i].key){
          arr.splice(i,1);
          break;
        }else{
          continue;
        }
      }
      break;

    default:
      // statements_def
      break;
  }

  global.tableListData.data = arr;
  return arr;
}


module.exports = {
  //post请求  /api/userList/ 是拦截的地址   方法内部接受 request response对象
  'GET /editUserInfo' (req, res) {
    const reqData = qs.parse(req.query).body;
    const newData = editTableListData(JSON.parse(reqData));
    setTimeout(() => {
      res.json({      //将请求json格式返回
        success: true,
        newData
      });
    }, 200);
  }
}
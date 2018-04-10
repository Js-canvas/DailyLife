'use strict';

const qs = require('qs');
const mockjs = require('mockjs');  //导入mock.js的模块

const Random = mockjs.Random;  //导入mock.js的随机数

// 数据持久化   保存在global的全局变量中
let dataListLength = 0;
if (!global.dataListLength) {
  const dataLength = global.tableListData.data.length;
  dataListLength = dataLength;
  global.dataListLength = dataListLength;
} else {
  dataListLength = global.dataListLength;
}

module.exports = {
  //post请求  /api/userList/ 是拦截的地址   方法内部接受 request response对象
  'GET /getListLength' (req, res) {
    let dataLength = dataListLength ;
    setTimeout(() => {
      res.json({      //将请求json格式返回
        success: true,
        dataLength
      });
    }, 200);
  }
}
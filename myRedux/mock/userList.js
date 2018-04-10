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

module.exports = {
  //post请求  /api/userList/ 是拦截的地址   方法内部接受 request response对象
  'GET /userList' (req, res) {
    const page = qs.parse(req.query);
    const pageSize = page.pageSize || 10;
    const currentPage = page.page || 1;
    let data = tableListData.data ;
    let newPage;
    let newData = tableListData.data.concat();

    //数据开始模拟
    // if (page.field) {
    //   const d = newData.filter((item) => {
    //     return item[page.filed].indexOf(page.keyword) > -1;
    //   });

    //   data = d.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    //   newPage = {
    //     current: currentPage * 1,
    //     total: d.length,
    //   };
    // } else {
    //   data = tableListData.data.slice((currentPage - 1) * pageSize, currentPage * pageSize);
    //   tableListData.page.current = currentPage * 1;

    //   newPage = {
    //     current: tableListData.page.current,
    //     total: tableListData.page.total,
    //   }
    // }
    setTimeout(() => {
      res.json({      //将请求json格式返回
        success: true,
        data,
        page: '12'
      });
    }, 200);
  }
}
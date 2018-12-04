/**
 * Created by 93659 on 2018/12/3.
 */
const express =  require('express');
const router = require('./router');
const db = require('./db');
const app = express();



(async()=>{
  await db;
  app.use(router);
})();

app.listen(4000,err=>{
  if (!err){
    console.log('服务器连接成功');

  }else {
    console.log(err);
  }
});

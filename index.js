/**
 * Created by 93659 on 2018/12/3.
 */
const express =  require('express');
const app = express();
const db = require('./db');
const router = require('./router');

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

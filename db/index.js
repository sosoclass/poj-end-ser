/**
 * Created by 93659 on 2018/12/3.
 */
const mongoose = require('mongoose');
module.exports = new Promise((resolve, reject) => {
  mongoose.connect('mongodb://localhost:27017/ggzp', {useNewUrlParser: true});
  mongoose.connection.once('open', err => {
    if(!err){
      console.log('数据库连接成功');
      resolve();

    }else {
      console.log(err);
      reject(err)
    }
  })
});
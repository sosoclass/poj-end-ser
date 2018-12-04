/**
 * Created by 93659 on 2018/12/3.
 */
const mongoose = require('mongoose');
const usersSchema = new mongoose.Schema({
  username:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true,
  },
  type:{
    type:String,
    required:true
  }
})
module.exports = mongoose.model('users',usersSchema);
/**
 * Created by Administrator on 2017/6/27 0027.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username:{type:String},
  password:{type:String},
  sex:{type:String},
  birthday:{type:Date},
  birthplace:{type:String},
  personal_tags:{type:Array},
  self_introduction:{String},
})

module.exports = UserSchema;

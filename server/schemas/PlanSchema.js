/**
 * Created by Administrator on 2017/6/27 0027.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlanSchema = new Schema({
  name:{type:String},
  date:{type:Date},
  persons:{type:String},
  comment:{type:String},
  avatar:{type:String}
})

module.exports = PlanSchema;

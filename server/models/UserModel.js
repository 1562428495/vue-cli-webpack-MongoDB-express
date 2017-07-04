/**
 * Created by Administrator on 2017/6/27 0027.
 */
var mongoose = require('mongoose');
var UserSchema = require('../schemas/UserSchema');
var UserModel = mongoose.model('UserModel', UserSchema);

module.exports = UserModel;

/**
 * Created by Administrator on 2017/6/27 0027.
 */
var mongoose = require('mongoose');
var PlanSchema = require('../schemas/PlanSchema');
var PlanModel = mongoose.model('PlanModel', PlanSchema);

module.exports = PlanModel;

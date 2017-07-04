/**
 * Created by Administrator on 2017/6/27 0027.
 */
// 可能是我的node版本问题，不用严格模式使用ES6语法会报错
"use strict";
const UserModel = require('./models/UserModel');
const PlanModel = require('./models/PlanModel');
const express = require('express');
const router = express.Router();

/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/

// 创建账号接口
router.post('/api/user/createUser',(req,res) => {
  // 保存数据newAccount数据进mongoDB
  UserModel.create(req.body,(err,data) => {
    if (err) {
      console.log('/api/user/createUser failed: ',err);
      res.json(err);
    } else {
      console.log('/api/user/createUser successed: ',data);
      res.json(data);
    }
  });
});
// 获取已有账号接口
router.post('/api/user/validateUser',(req,res) => {
  // 通过模型去查找数据库
  UserModel.findOne({username:req.body.username,password:req.body.password},(err,data) => {
    if (err) {
      console.log('/api/user/validateUser failed: ',err);
      res.json(err);
    } else {
      console.log('/api/user/validateUser successed: ',data);
      res.json(data);
    }
  });
});

// 创建账号接口
router.post('/api/self_service/create_memo',(req,res) => {
  // 保存数据newAccount数据进mongoDB
  PlanModel.create(req.body,(err,data) => {
    if (err) {
      console.log('/api/self_service/create_memo failed: ',err);
      res.json(err);
    } else {
      console.log('/api/self_service/create_memo successed: ',data);
      res.json(data);
    }
  });
});

router.post('/api/self_service/delete_memo',(req,res) => {
  // 保存数据newAccount数据进mongoDB
  PlanModel.remove(req.body,(err,data) => {
    if (err) {
      console.log('/api/self_service/delete_memo failed: ',err);
      res.json(err);
    } else {
      console.log('/api/self_service/delete_memo successed: ');
      res.json(data);
    }
  });
});

module.exports = router;

/**
 * Created by Administrator on 2017/6/29 0029.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

const state = {
  activeName:'scan',
  list: [{
    name : '二哲',
    avatar : 'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256',
    date : '2016-12-25',
    persons : '张三，李四',
    comment : '12月25日完善，陪朋友一起过圣诞节需要6个小时'
  }],
  stickNote:[{
    date:'2017-6-29',
    event:'周六和朋友一起去逛街',
    urgent:3,
    background:'lightgreen',
  },{
    date:'2017-7-9',
    event:'周六和朋友一起去旅游周六和朋友一起去旅游周六和朋友一起去旅游周六和朋友一起去旅游周六和朋友一起去旅游周六和朋友一起去旅游',
    urgent:5,
    background:'pink',
  }]
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
});

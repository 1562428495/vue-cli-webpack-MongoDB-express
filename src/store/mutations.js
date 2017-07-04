/**
 * Created by Administrator on 2017/6/29 0029.
 */
import * as types from './mutation_types';

export default {
  [types.SAVE_PLAN](state,plan){
    state.list.push(plan);
    state.activeName = 'scan';
  },
  [types.DELETE_PLAN](state,index){
    state.list.splice(index,1);
  },
  [types.SAVE_STICKNOTE](state,stickNote){
    state.stickNote.push(stickNote);
  },
  [types.DELETE_STICKNOTE](state,index){
    state.stickNote.splice(index,1);
  }
}

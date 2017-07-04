/**
 * Created by Administrator on 2017/6/29 0029.
 */
import * as types from './mutation_types';

export default {
  saveStickNote({commit},stickNote){
    commit(types.SAVE_STICKNOTE,stickNote);
  },
  deleteStickNote({commit},stickNote){
    commit(types.DELETE_STICKNOTE,stickNote);
  },
  savePlan({commit},plan){
    commit(types.SAVE_PLAN,plan);
  },
  deletePlan({commit},plan){
    commit(types.DELETE_PLAN,plan);
  }
}

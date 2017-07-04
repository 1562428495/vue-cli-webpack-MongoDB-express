import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Signup from '../components/Signup.vue'
import Success from '../components/Success.vue'
import ScanMemo from '../components/self_service/ScanMemo'
import CreateMemo from '../components/self_service/CreateMemo.vue'
import StickNote from '../components/self_service/StickNote.vue'
import ScanStickNote from '../components/self_service/ScanStickNote.vue'
import CreateStickNote from '../components/self_service/ScanStickNote.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    }, {
      path: '/signup',
      name: 'Sigup',
      component: Signup
    },{
      path: '/success',
      name: 'Success',
      component: Success
    },{
      path: '/memo',
      name:'Memo',
      component: ScanMemo,
      children:[{
        path: 'create',
        name: 'CreateMemo',
        component: CreateMemo
      }]
    },{
      path:'/stickNote',
      name:'StickNote',
      component:StickNote,
      children:[{
        path:'scan',
        name:'ScanStickNote',
        component:ScanStickNote
      },{
        path:'create',
        name:'CreateStickNote',
        component:CreateStickNote
      }]
    }
  ]
})

<template>
    <div id="app">
      <el-menu theme="dark" :default-active="activeIndex" class="menu" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">OA首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">部门业务</el-menu-item>
        <el-menu-item index="2-2">ERP</el-menu-item>
        <el-menu-item index="2-3">业务系统</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">员工自助</template>
        <el-menu-item index="3-1" disabled=""><router-link to="/memo">备忘录</router-link></el-menu-item>
        <el-menu-item index="3-2" disabled=""><router-link to="/stickNote">便利贴</router-link></el-menu-item>
      </el-submenu>
    </el-menu>
    </div>
</template>

<script>
  import ElMenu from '../../../node_modules/element-ui/packages/menu/src/menu'
  import ElMenuItem from '../../../node_modules/element-ui/packages/menu/src/menu-item'
  import ElSubmenu from '../../../node_modules/element-ui/packages/menu/src/submenu'
  export default {
    components: {ElSubmenu, ElMenuItem, ElMenu}, name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style lang="scss">
.menu{

}
</style>

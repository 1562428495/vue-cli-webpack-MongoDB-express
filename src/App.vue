<template>
  <div id="app">
    <Navbar class="navbar"></Navbar>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
  import Navbar from './components/structure/Navbar.vue'
export default {
  name: 'app',
  components:{Navbar}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
  .navbar{

  }
  .view{
    width:70%;
    margin:0 auto;
  }
</style>

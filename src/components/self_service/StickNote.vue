<template>
    <div id="app">
      <el-tabs v-model="activeName" type="border-card" value="scan" id="tabs">
        <el-tab-pane label="所有便利贴" name="scan">
          <ScanStickNote flag="myflag"></ScanStickNote>
        </el-tab-pane>
        <el-tab-pane label="创建便利贴" name="create">
          <CreateStickNote></CreateStickNote>
        </el-tab-pane>
      </el-tabs>
      <el-button type="primary" @click="exchange">切换</el-button>
    </div>
</template>

<script>
  import ScanStickNote from './ScanStickNote.vue';
  import CreateStickNote from './CreateStickNote.vue';
  import {bus} from '../../bus'
  import ElButton from '../../../node_modules/element-ui/packages/button/src/button'
  export default {
    name: 'app',
    data () {
      return {
        activeName: 'scan',
      }
    },
    components:{ElButton, ScanStickNote,CreateStickNote},
    methods:{
      exchange(){
        alert('exchange');
        this.activeName = 'scan';
      }
    },
    created(){
      console.log('created: ',this.activeName);
    },
    mounted(){
      console.log('mounted: ',this.activeName);
      bus.$on('success',() => {
        this.activeName = 'scan';
      })

    }
  }
</script>

<style lang="scss">

</style>

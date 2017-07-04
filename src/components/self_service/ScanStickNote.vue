<template>
  <div id="app">
    <el-row>
      <el-col :span="6" v-for="(note, index) in stickNote" :key="note" :offset="index > 0 ? 2 : 0">
        <el-card class="card" :body-style="{background:note.background}">
          <div class="urgent">
            <el-rate v-model="note.urgent" showText :texts="['无关紧要','不紧急','一般','紧急','非常紧急']"
                :colors="['#99A9BF', '#FAF73B', '#FF9900']" disabled>
            </el-rate>
          </div>

          <div class="event" style="padding: 14px;">
            <span>{{note.event}}</span>
          </div>
          <div class="date">
            {{note.date}}
          </div>
        </el-card>
      </el-col>
    </el-row>
    {{flag}}
  </div>
</template>

<script>
  import ElButton from '../../../node_modules/element-ui/packages/button/src/button'
  export default {
    components: {ElButton}, name: 'app',
    data () {
      return {
        stickNote: this.$store.state.stickNote,
      }
    },
    props:[
      'flag'
    ]
  }
</script>

<style lang="scss">
.card{

}
  .date{
    margin-bottom: 0;
    margin-right:0;
  }
</style>

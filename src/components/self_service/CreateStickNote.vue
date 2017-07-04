<template>
  <div id="app">
    <el-card class="card2">
      <el-form :model="stickNoteForm" :rules="rules" ref="stickNoteForm" labelWidth="25%" class="stickNoteForm">
        <el-row>
          <el-form-item label="紧急程度：" prop="urgent">
            <el-col :span="18">
              <el-rate v-model="stickNoteForm.urgent" showText :texts="['无关紧要','不紧急','一般','紧急','非常紧急']"
                       :colors="['#99A9BF', '#FAF73B', '#FF9900']">
              </el-rate>
            </el-col>
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item label="事件：" prop="event">
            <el-col :span="10">
              <el-input type="textarea" v-model="stickNoteForm.event" class="event2" placeholder="请输入事件" :rows="4"></el-input>
            </el-col>
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item label="日期：" prop="date">
            <el-col :span="10">
              <el-date-picker v-model="stickNoteForm.date" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
              </el-date-picker>
            </el-col>
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item label="背景色：" prop="background">
            <el-col :span="7">
              <el-color-picker v-model="stickNoteForm.background"></el-color-picker>
            </el-col>
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item>
            <el-col :span="8">
              <el-button @click="submitForm('stickNoteForm')" type="primary">创建</el-button>&nbsp;&nbsp;&nbsp;
            </el-col>
            <el-col :span="8">
              <el-button @click="cancel()" type="danger">取消</el-button>
            </el-col>
          </el-form-item>
        </el-row>
      </el-form>
    </el-card>
  </div>
</template>

<script>
  import ElInput from '../../../node_modules/element-ui/packages/input/src/input'
  import ElButton from '../../../node_modules/element-ui/packages/button/src/button'
  import ElCol from 'element-ui/packages/col/src/col'
  import {bus} from '../../bus'
  import Vue from 'vue'
  var vue = new Vue();
  export default {
    components: {ElCol, ElButton, ElInput}, name: 'app',
    data () {
      return {
        tt:3,
        stickNoteForm: {
          urgent: 3,
          event: '',
          date:'',
          background:'lightgreen'
        },
        rules: {
          event: [
            { required: true, message: '请输入事件', trigger: 'blur' }
          ],
          date:[{
            required:true
          }],
        },
      }
    },
    methods:{
      submitForm(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.stickNoteForm);
            this.$store.dispatch('saveStickNote',this.stickNoteForm);
            bus.$emit("success");
          }
        })
      },
      cancel(){
        this.goBack(-1);
      }
    },
    mounted(){
      this.$on('touch',function (a) {
        alert(a);
      })
    }
  }
</script>

<style lang="scss">
  .card2{
    margin:0 auto;
    width:33rem;
    height:33rem;
  }
.event2{
    width:20rem;
}
</style>

<template>
  <div class="hello">
    <el-form :model="loginForm" :rules="rules" ref="loginForm" labelWidth="40%" class="loginForm">
      <el-row>
        <el-form-item label="用户名：" prop="username">
          <el-col :span="10">
            <el-input v-model="loginForm.username" placeholder="请输入用户名" class="input"></el-input>
          </el-col>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item label="密码：" prop="password">
          <el-col :span="10">
            <el-input v-model="loginForm.password" placeholder="请输入密码" type="password"></el-input>
          </el-col>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item>
          <el-col :span="8">
            <el-button @click="submitForm('loginForm')" type="primary">登录</el-button>&nbsp;&nbsp;&nbsp;
            <el-button @click="forgetPassord()" type="text">忘记密码</el-button>
          </el-col>
        </el-form-item>
      </el-row>
      <label id="msg">用户名或密码错误，请重新输入</label>
    </el-form>
    <label>没有账号，立即<router-link to="/signup">注册</router-link></label>
  </div>
</template>

<script>
  import ElInput from '../../node_modules/element-ui/packages/input/src/input'
  import ElButton from '../../node_modules/element-ui/packages/button/src/button'
  import ElForm from '../../node_modules/element-ui/packages/form/src/form'
  import ElFormItem from '../../node_modules/element-ui/packages/form/src/form-item'
  import ElCol from "element-ui/packages/col/src/col";
  export default {
    components: {ElCol, ElFormItem, ElForm, ElButton, ElInput },
    name: 'hello',
    data () {
      return {
        loginForm: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            { required: true, message: '请输入用户', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        },

      }
    },
    methods: {
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var params = {
              username:this.loginForm.username,
              password:this.loginForm.password
            }
            this.$http.post('/api/user/validateUser',params)
              .then((response) => {
                // 响应成功回调
                console.log(response)
                if(response.body){
                  document.getElementById("msg").style.display = 'none';
                  this.$router.push({path: '/success', query: {msg: '登录成功'}});
                }else{
                  document.getElementById("msg").style.display = 'block';
                  this.loginForm.password = '';
                }

              })
              .catch((reject) => {
                document.getElementById("msg").style.display = 'block';
                console.log(reject)
              });
          } else {
            alert('Submit failed')
            return false
          }
        })
      },
      forgetPassword () {
        alert('forget')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input {
  weight: '30%';
}
  #msg{
    color:red;
    font-size:1rem;
    display: none;
  }
  .loginForm{
    margin-top:8rem;
  }

</style>

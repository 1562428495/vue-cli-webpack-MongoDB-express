<template>
  <div class="hello">
    <el-form :model="signupForm" :rules="rules" ref="signupForm" labelWidth="35%" class="signupForm">
      <el-row>
        <el-form-item label="用户名：" prop="username">
          <el-col :span="10">
            <el-input v-model="signupForm.username" placeholder="请输入用户名"></el-input>
          </el-col>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item label="密码：" prop="password">
          <el-col :span="10">
            <el-input v-model="signupForm.password" placeholder="请输入密码" type="password"></el-input>
          </el-col>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item label="确认密码：" prop="confirm_password">
          <el-col :span="10">
            <el-input v-model="signupForm.confirm_password" placeholder="请输入确认密码" type="password"></el-input>
          </el-col>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item label="性别：" prop="sex">
          <el-col :span="10" align="left">
            <el-radio-group v-model="signupForm.sex">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-col>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item label="出生日期：" prop="birthday">
          <el-col :span="12" align="left">
            <el-date-picker type="date" v-model="signupForm.birthday" placeholder="请输入出生日期"></el-date-picker>
          </el-col>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item label="籍贯：" prop="birthplace">
          <el-col :span="12" align="left">
            <el-cascader v-model="signupForm.birthplace" expand-trigger="hover" :options="citys"></el-cascader>
          </el-col>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item label="个性标签：" prop="personal_tags">
          <el-col :span="18" align="left">
            <el-checkbox-group v-model="signupForm.personal_tags">
              <el-checkbox label="乐观主义"></el-checkbox>
              <el-checkbox label="天真烂漫"></el-checkbox>
              <el-checkbox label="幽默搞笑"></el-checkbox>
              <el-checkbox label="积极向上"></el-checkbox>
              <el-checkbox label="忠厚老实"></el-checkbox>
              <el-checkbox label="工作努力"></el-checkbox>
              <el-checkbox label="放荡不羁"></el-checkbox>
              <el-checkbox label="随性洒脱"></el-checkbox>
            </el-checkbox-group>
          </el-col>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item label="自我介绍：" prop="self_introduction">
          <el-col :span="20" align="left">
            <el-input type="textarea" v-model="signupForm.self_introduction" placeholder="快点让大家认识你吧"></el-input>
          </el-col>
        </el-form-item>
      </el-row>
      <el-form-item>
        <el-col :span="12">
          <el-button @click="submitForm('signupForm')" type="primary">注册</el-button>
        </el-col>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import ElInput from '../../node_modules/element-ui/packages/input/src/input'
  import ElButton from '../../node_modules/element-ui/packages/button/src/button'
  import ElForm from '../../node_modules/element-ui/packages/form/src/form'
  import ElFormItem from '../../node_modules/element-ui/packages/form/src/form-item'
  import ElRadioGroup from "../../node_modules/element-ui/packages/radio/src/radio-group";
  import ElRadio from "../../node_modules/element-ui/packages/radio/src/radio";
  import ElCheckboxGroup from "../../node_modules/element-ui/packages/checkbox/src/checkbox-group";
  import ElCheckbox from "../../node_modules/element-ui/packages/checkbox/src/checkbox";
  import ElCascader from "../../node_modules/element-ui/packages/cascader/src/main";
  import ElRow from "element-ui/packages/row/src/row";
  import ElCol from "element-ui/packages/col/src/col";
  export default {
    components: {
      ElCol, ElRow,
      ElCascader, ElCheckbox, ElCheckboxGroup, ElRadio, ElRadioGroup, ElFormItem, ElForm, ElButton, ElInput },
    name: 'hello',
    data () {
      var validatePassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (value.length < 6 || (value.search(/[a-z]/)==-1 && value.search(/[A-Z]/)==-1) || value.search(/[0-9]/)==-1) {
            callback(new Error('密码不少于6位，且必须是字母和数字的组合'));
          }
          callback();
        }
      };
      var validateConPass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.signupForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        signupForm: {
          username: '',
          password: '',
          confirm_password:'',
          sex:'',
          birthday:'',
          birthplace:[],
          personal_tags:[],
          self_introduction:''
        },
        citys: [{
          value:'北京市',
          label:'北京市',
          children:[{
            value:'朝阳区',
            label:'朝阳区',
          },{
            value:'海淀区',
            label:'海淀区',
          },{
            value:'东城区',
            label:'东城区',
          }]
        },{
        value:'天津市',
          label:'天津市',
          children:[{
          value:'南开区',
          label:'南开区',
        },{
          value:'红桥区',
          label:'红桥区',
        },{
          value:'北辰区',
          label:'北辰区',
        }]
      }],
        rules: {
          username: [
            { required: true, message: '请输入用户', trigger: 'blur' }
          ],
          password: [
            { validator: validatePassword,required: true,  trigger: 'blur' }
          ],
          confirm_password: [
            {  validator:validateConPass,required: true,trigger: 'blur' }
          ],
          sex: [
            { required: true, message: '请选择性别', trigger: 'change' }
          ],
          birthday: [
            { type: 'date', required: true, message: '请选择出生日期', trigger: 'change' }
          ],
          birthplace: [
            { type: 'array', required: true, message: '请选择出生地', trigger: 'change' }
          ],
          personal_tags: [
            { type: 'array', required: true, message: '请选择个性标签', trigger: 'change' }
          ],
          self_introduction: [
            { required: true, message: '请填写自我介绍', trigger: 'blur' }
          ]
        },
      }
    },
    methods: {
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('Submit successed!')
            let params = {
              username : this.signupForm.username,
              password : this.signupForm.password,
              confirm_password:this.signupForm.confirm_password,
              sex:this.signupForm.sex,
              birthday:this.signupForm.birthday,
              birthplace:this.signupForm.birthplace,
              personal_tags:this.signupForm.personal_tags,
              self_introduction:this.signupForm.self_introduction
            };
            console.log(params.birthplace);
            console.log(typeof params.birthplace);
            this.$http.post('/api/user/createUser',params)
              .then((response) => {
                // 响应成功回调
                console.log(response)
                this.$router.push({path:'/success',query:{msg:'注册成功'}});
              })
              .catch((reject) => {
                console.log(reject)
              });
          } else {
            alert('Submit failed')
            return false
          }
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .signupForm{
    margin-top:1rem;
  }
</style>

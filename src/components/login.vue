<template>
  <el-form ref="loginform" :model="loginform" :rules="loginrule" status-icon class="login">
    <el-form-item prop="tel">
      <el-input v-model="loginform.tel" placeholder="手机号" autocomplete="off"></el-input>
    </el-form-item>  
    <el-form-item prop="password">
      <el-input type="password" v-model="loginform.password" placeholder="密码" autocomplete="off"></el-input>
    </el-form-item>   
    <el-form-item>
      <el-button type="primary" @click="submitForm('loginform')">登录</el-button>
    </el-form-item>    
  </el-form>
</template>

<script>
export default {
  name: 'login',
  props: {
    msg: String
  },
  data() {
    let validatetel = (rule, value, callback)=>{
      const telrule = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
      if(value === ''){
        return callback(new Error('请输入手机号'));
      }
      if(!value.match(telrule)){
         return callback(new Error('请输入正确的手机号'));
      }
      callback();
    }

    let validatePass = (rule, value, callback)=>{
      const passrule = /^\d{6,20}$/;
      if(value === ''){
        return callback(new Error('请输入密码'));
      }
      callback();
    }

    return {
      loginform:{
        tel:'',
        password:''
      },
      loginrule:{
        tel:[
          { validator: validatetel, trigger: 'blur' }
        ],
        password:[
          { validator: validatePass, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName){
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.axios.post('/api/login',{
            tel:this.loginform.tel,
            password:this.$md5(this.loginform.password)
          }).then((data)=>{
            console.log(data.body)
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login{
    width: 500px;
  }
</style>

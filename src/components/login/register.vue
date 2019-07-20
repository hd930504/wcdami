<template>
  <el-form ref="loginform" :model="loginform" :rules="loginrule" status-icon class="login">
    <el-form-item prop="tel">
      <el-input v-model="loginform.tel" placeholder="手机号" autocomplete="off"></el-input>
    </el-form-item>  
    <!-- <el-form-item prop="password">
      <el-input type="password" v-model="loginform.password" placeholder="密码" autocomplete="off"></el-input>
    </el-form-item>    -->
    <el-form-item prop="captcha">
      <div id="captchaBox"></div>
      <div class="geetest_form">
          <input type="hidden" name="geetest_challenge" value="xxx">
          <input type="hidden" name="geetest_validate" value="xxx">
          <input type="hidden" name="geetest_seccode" value="xxx">
      </div>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('loginform')">注册</el-button>
    </el-form-item>    
  </el-form>
</template>

<script>
export default {
  name: 'register',
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

    // let validatePass = (rule, value, callback)=>{
    //   const passrule = /^(\w){6,20}$/;
    //   if(value === ''){
    //     return callback(new Error('请输入密码'));
    //   }
    //   if(!value.match(passrule)){
    //     return callback(new Error('请输入6-20位密码'));
    //   }
    //   callback();
    // }

    let validateCaptcha = (rule, value, callback)=>{
      if(!this.captcha){
        return callback(new Error('请点击按钮完成认证'));
      }
      callback();
    }
    return {
      captcha: false,
      loginform:{
        tel:'',
        password:''
      },
      loginrule:{
        tel:[
          { validator: validatetel, trigger: 'blur' }
        ],
        // password:[
        //   { validator: validatePass, trigger: 'blur' }
        // ],
        captcha:[
          { validator: validateCaptcha}
        ]
      }
    }
  },
  methods: {
    submitForm(formName){
      this.$refs[formName].validate((valid) => {
        if (valid && this.captcha) {
            this.axios.post('/api/register',{
              tel:this.loginform.tel,
              password:this.$md5(this.loginform.password)
            }).then((data)=>{
              if(data.data.code !== 0){
                  this.$message.warning(data.data.msg);
                }else{
                  this.hide = true;
                }
            })
          } else {
            return false;
          }
      });
      
    }
  },
  created() {
        this.axios.get("/api/gt/register").then((data)=>{
          let _this = this
          window.initGeetest({
              // 以下配置参数来自服务端 SDK
              gt: data.data.gt,
              challenge: data.data.challenge,
              offline: !data.data.success,
              new_captcha: true,
              product: 'float',
              width:'100%'
          }, function (captchaObj) {
              captchaObj.appendTo("#captchaBox"); //将验证按钮插入到宿主页面中captchaBox元素内
              captchaObj.onReady(function(){
              }).onSuccess(function(){                
                _this.captcha = true
                var result = captchaObj.getValidate();
              }).onError(function(){
                _this.captcha = false
              })
          })
        }) 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login{
    width: 500px;
  }
</style>

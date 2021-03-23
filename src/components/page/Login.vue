<template>
    <div class="login">        
        <router-view></router-view>
        <div class="box">
            <li><input placeholder="请输入账号" v-model="account" ></li>
            <li><input type="password" placeholder="请输入密码" v-model="password" show-password></li>
            
            <li id="login"><el-button @click="login()">登录</el-button></li>
        </div>
        
    </div>
</template>

<script>
export default {
    data() {
      return {
        account: '',
        password:'',
      }
    },
    methods:{
        login(){
            if(this.account==111&&this.password==111){
                // alert("登录成功");
                // this.$router.replace('/manager')
                this.$router.replace('/rooms');
            }else{
                alert("账号或密码错误")
            }
        }
    }
}
</script>

<style scoped>
#login{
    margin-top: 15px;
    margin-left: 120px;
}
li{
    list-style: none;
}
*{
    position: relative;
}
input{
    margin: 10px;
    width: 300px;
    height: 40px;
}
.box{
    margin-left: 300px;
    margin-top: 120px;
    align-items: center;
}
</style>
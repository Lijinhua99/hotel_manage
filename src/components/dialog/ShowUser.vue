<template>
    <div class="showuser">
        <router-link to="/rooms">
            <p><button id="back">返回</button></p>  
        </router-link>           
        <div class="include">  
            <div class="cin">      
                <li><h3 align="center">住户信息</h3></li>
                <li> 住户姓名<input id="input" v-model="username" readonly></li>
                <li id="type">
                    男<input id="type" type="radio" name="sex" :value="1" v-model="check" readonly>
                    女<input id="type" type="radio" name="sex" :value="2" v-model="check" readonly>
                </li>
                <li>用户电话<input id="input" v-model="phone" readonly></li>
                <li>用户身份证<input id="input" v-model="userid" readonly></li>                
            </div> 
        </div>         
        <router-view></router-view>  
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            username:'',
            check:'',
            phone:'',
            userid:'',
            message:'',
        }
    },
    methods:{
        
    },
    mounted:function(){
        this.userid=this.$route.params.userid;
        const qs=require('qs');                           
        axios.post('http://localhost:8080/hotel?method=showuserkpi',qs.stringify({'userid':this.userid}))
        //then获取成功；response成功后的返回值（对象）
        .then(response=>{
            this.message=response.data;
            console.log(response);
            this.username=this.message[0];
            this.check=this.message[1];
            this.phone=this.message[2];
        }).catch(error=>{//获取失败
            console.log(error);
            alert('网络错误，不能访问');
        }); 
    }

}
</script>

<style scoped>
.include{
    margin-top: -15px;
}
#type{
    margin-top: 10px;
    padding-bottom: 15px;
    /* border-bottom: 1px solid #2F4F4F; */
    text-align: center;
}
#button{
    margin-top: 15px;
}
li{
    list-style: none;
}
.include{
    position: absolute;
    left: 20%;
}
#input{
    text-align: center;
    height: 50px;
    width: 380px;
    border: 0;
    border-bottom: 1px solid #2F4F4F;
}
.showuser{
    position: relative;
    margin-left: 10px;
}
#back{
    font-size: 15px;
    color: #708090;
    border: 0;
    background: none;
}
</style>
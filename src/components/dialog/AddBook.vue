<template>
    <div class="addbookpage">
        <router-link to="/book">
            <p><button id="back">返回</button></p>  
        </router-link>
        <router-view></router-view>           
        <div class="include">  
            <div class="cin">              
                <li><h3 align="center">添加预订订单</h3></li>

                <li><input id="input" placeholder="住户姓名" v-model="username"></li>                
                <li id="sex"><input  id="check" type="radio" name="user_sex" value="1" v-model="check">
                男<input id="check" type="radio" name="user_sex" value="2" v-model="check">女</li>
                <li><input id="input" placeholder="住户密码" v-model="password"></li>  
                <li><input id="input" placeholder="住户电话" v-model="phone"></li>  
                <li><input id="input" placeholder="住户身份证" v-model="userid"></li>  
                <li><input id="input" placeholder="预订房间" v-model="roomid"></li>  
                <li><input id="input" type="date" placeholder="预订日期" v-model="bookdate"></li>
            </div>                 
            <li align="center" id="button"><el-button @click="addbook()">添加</el-button></li>   
        </div>         
    </div>
</template>

<script>
import axios from 'axios';
export default {    
    data() {
        return {
            username:'',
            bookdate:'',
            password:'',
            check:'',
            phone:'',
            userid:'',
            roomid:'',
        }
    },
    methods: {
        addbook(){
            if(!this.username||!this.password||!this.check||!this.phone||!this.userid||!this.roomid||this.bookdate==null){
                alert("请完善信息");
            }else{
                const qs=require('qs');            
                axios.post('http://localhost:8080/hotel?method=addbook',qs.stringify({'username':this.username,'password':this.password,'check':this.check,'phone':this.phone,'userid':this.userid,'roomid':this.roomid,'bookdate':this.bookdate}))
                //then获取成功；response成功后的返回值（对象）
                .then(response=>{
                    console.log(response);
                    alert("添加成功")
                }).catch(error=>{//获取失败
                    console.log(error);
                    alert('网络错误，不能访问');
                });                 
            }              
        },
    },
}
</script>

<style scoped>
.cin{
    margin-top: -15px;
}
#sex{
    margin-left: 150px;
    margin-top: 10px;
    margin-bottom: 10px;
}
table,tr,td{
    border: 0;
}
input{
    border: 0;
    border-bottom: 1px solid #2F4F4F;
    height: 25px;
}
#check{
    margin-top: 7px;
    align-items: center;
    height: 15px;
}
#type{
    margin-top: 10px;
    padding-bottom: 15px;
    border-bottom: 1px solid #2F4F4F;
}
#button{
    margin-top: 15px;
}
li{
    list-style: none;
}
.include{
    position: absolute;
    left: 25%;
}
#input{
    height: 45px;
    width: 380px;
    border: 0;
    border-bottom: 1px solid #2F4F4F;
}
.addbookpage{
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
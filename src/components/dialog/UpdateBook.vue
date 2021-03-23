<template>
    <div class="addbookpage">
        <router-link to="/book">
            <p><button id="back">返回</button></p>  
        </router-link>
        <router-view></router-view>           
        <div class="include">  
            <div class="cin">      
                <li><h3 align="center">修改订单</h3></li>

                <li> 住户姓名<input id="input" v-model="username"></li>
                <li> 住户密码<input id="input" v-model="password"></li>
                <li id="type">
                    男<input id="type" type="radio" name="sex" :value="1" v-model="check">
                    女<input id="type" type="radio" name="sex" :value="2" v-model="check">
                </li>
                <li>用户电话<input id="input" v-model="phone"></li>
                <li>用户身份证<input id="input" v-model="userid" readonly></li>
                <li>预订房间<input id="input" v-model="roomid"></li>  
                <li>预订日期<input type="date" id="input" v-model="bookdate"></li>  
                
            </div>                 
            <li align="center" id="button"><el-button @click="savebook()">保存</el-button></li>   
        </div>         
    </div>
</template>

<script>
import axios from 'axios';
export default {    
    data() {
        return {
            books:[],
            id:'',
            username:'',
            password:'',
            check:'',
            phone:'',
            userid:'',
            roomid:'',
            bookdate:'',
            reid:'',
        }
    },
    methods: {
        savebook(){
            if(!this.username||!this.password||!this.check||!this.phone||!this.userid||!this.roomid||this.bookdate==null){
                alert("请完善信息");
            }else{
                const qs=require('qs');            
                axios.post('http://localhost:8080/hotel?method=savebook',qs.stringify({'username':this.username,'password':this.password,'check':this.check,'phone':this.phone,'userid':this.userid,'roomid':this.roomid,'bookdate':this.bookdate,'reid':this.reid}))
                //then获取成功；response成功后的返回值（对象）
                .then(response=>{
                    console.log(response);
                    alert("修改成功")
                }).catch(error=>{//获取失败
                    console.log(error);
                    alert('网络错误，不能访问');
                });                 
            }           
               
        },
    },
    mounted:function(){
        this.id = this.$route.params.id;
        const qs=require('qs');            
        axios.post('http://localhost:8080/hotel?method=updatebook',qs.stringify({'id':this.id}))
        //then获取成功；response成功后的返回值（对象）
        .then(response=>{
            console.log(response);
            this.books=response.data;
            this.username=this.books[4];
            this.password=this.books[5];
            this.phone=this.books[7];
            this.userid=this.books[3];
            this.roomid=this.books[1];
            this.check=this.books[6];
            this.bookdate=this.books[2];
            this.reid=this.books[8];

        }).catch(error=>{//获取失败
            console.log(error);
            alert('网络错误，不能访问');
        });   
    }
}
</script>

<style scoped>
.cin{
    margin-top: -15px;
}
#sex{
    padding: 10px;
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
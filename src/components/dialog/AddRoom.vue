<template>
    <div class="addroompage">
        <router-view></router-view>  
        <router-link to="/rooms">
            <p><button id="back">返回</button></p>  
        </router-link> 
        <div class="include">  
            <div class="cin">              
                <li><h3 align="center">添加房间</h3></li>
                <li><input id="input" placeholder="房间号" v-model="roomid"></li>
                <li id="type">
                    大床房<input id="type" type="radio" name="roomsType" :value="1" v-model="checkedValue">
                    双床房<input id="type" type="radio" name="roomsType" :value="2" v-model="checkedValue">
                    家庭房<input id="type" type="radio" name="roomsType" :value="3" v-model="checkedValue">
                </li>
                <li><input id="input" placeholder="房间价格" v-model="roomprice"></li>
                <li><input id="input" placeholder="可住人数" v-model="roomap"></li>  
            </div>     
            
            <li align="center" id="button"><el-button @click="add()">添加</el-button></li>   
        </div>         
        <router-view></router-view>  
    </div>
</template>

<script>
import axios from 'axios';
export default {    
    data() {
        return {
            roomid:'',
            checkedValue:'',
            roomprice:'',
            roomap:'',
        }
    },
    methods: {
        add(){
            if(!this.roomid||!this.checkedValue||!this.roomprice||!this.roomap){
                alert("请完善信息");
            }else{
                const qs=require('qs');            
                axios.post('http://localhost:8080/hotel?method=addroom',qs.stringify({'roomid':this.roomid,'roomtype':this.checkedValue,'roomprice':this.roomprice,'roomap':this.roomap}))
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
    height: 50px;
    width: 380px;
    border: 0;
    border-bottom: 1px solid #2F4F4F;
}
.addroompage{
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
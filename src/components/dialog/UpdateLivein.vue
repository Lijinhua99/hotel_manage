<template>
    <div class="updatelivein">
        <router-link to="/livein">
            <p><button id="back">返回</button></p>  
        </router-link>
        <router-view></router-view>           
        <div class="include">  
            <div class="cin">              
                <li><h3 align="center">添加入住订单</h3></li>       
                <li><input id="input" placeholder="住户身份证" v-model="userid"></li>        
                <li><input id="input" placeholder="房间号" v-model="roomid"></li>        
                <li><input id="input" type="date" placeholder="入住日期" v-model="startdate"></li>        
                <li><input id="input" type="date" placeholder="退房日期" v-model="enddate"></li>        
                <li><input id="input" placeholder="总费用" v-model="allprice"></li>      
            </div>                 
            <li align="center" id="button"><el-button @click="addlivein()">添加</el-button></li>   
        </div>         
    </div>
</template>

<script>
import axios from 'axios';
export default {    
    data() {
        return {
            userid:'',
            roomid:'',
            startdate:'',
            enddate:'',
            allprice:'',
        }
    },
    methods: {
        addlivein(){
            if(!this.userid||!this.roomid||this.startdate==null||!this.allprice||this.enddate==null){
                alert("请完善信息");
            }else{
                const qs=require('qs');            
                axios.post('http://localhost:8080/hotel?method=addlivein',qs.stringify({'userid':this.userid,'roomid':this.roomid,'startdate':this.startdate,'enddate':this.enddate,'allprice':this.allprice}))
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
    text-align: center;
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
.updatelivein{
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
<template>
    <div class="updateroom">
        <router-link to="/rooms">
            <p><button id="back">返回</button></p>  
        </router-link>
        <router-view></router-view>           
        <div class="include">  
            <div class="cin">              
                <li><h3 align="center">修改房间信息</h3></li>
                <li> 房 间 号<input id="input" v-model="id"></li>
                <li id="type">
                    大床房<input id="type" type="radio" name="roomsType" :value="1" v-model="checkedValue">
                    双床房<input id="type" type="radio" name="roomsType" :value="2" v-model="checkedValue">
                    家庭房<input id="type" type="radio" name="roomsType" :value="3" v-model="checkedValue">
                </li>
                <li>房间价格<input id="input" v-model="price"></li>
                <li>房间状态<input id="input" v-model="state"></li>
                <li>可住人数<input id="input" v-model="roomap"></li>  
            </div>     
            <li align="center" id="button"><el-button @click="save()">保存</el-button></li>
        </div>         
        <router-view></router-view>  
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            id:'',
            checkedValue:'',
            price:'',
            state:'',
            roomap:'',
            room:'',
        }
    },
    methods:{
        save(){
            if(!this.id||!this.price||!this.roomap||!this.state){
                alert("请完善信息");
            }else{
                const qs=require('qs');                           
                axios.post('http://localhost:8080/hotel?method=saveroom',qs.stringify({'id':this.id,'type':this.checkedValue,'price':this.price,'roomap':this.roomap,'state':this.$route.params.state}))
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
        this.checkedValue = this.$route.params.type=='大床房'?1:this.$route.params.type=='双床房'?2:3;
        this.price = this.$route.params.price;
        this.state = this.$route.params.state==0?'未入住':this.$route.params.type==1?'已入住':' 已预订';
        this.roomap=this.$route.params.roomap;
        console.log(this.id)
    }

}
</script>

<style>
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
.updateroom{
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
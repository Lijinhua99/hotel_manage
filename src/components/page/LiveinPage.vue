<template>
    <div class="LiveinPage">
        <p id="liveinH">入住信息管理</p>
        <div class="blank">
            <div class="blankleft">
                <input placeholder="请输入房间号或身份证号查询" v-model="input">
                <button @click="selectlivein()">查询</button>
            </div>
            <div class="blankright">
                <router-link to="/addlivein">
                    <button>添加订单</button>
                </router-link>
            </div>
        </div>
        <table align="center" border="1px">
            <tr>
                <th>用户身份证号</th>
                <th>房间号</th>
                <th>预订日期</th>
                <th>入住日期</th>
                <th>总费用</th>
                <th>操作</th>
            </tr>
            <tr v-for="live in lives" :key="live.ch_id">
                <td>{{live.user_id}}</td>
                <td>{{live.room_id}}</td>
                <td>{{live.start_date}}</td>
                <td>{{live.end_date}}</td>
                <td>{{live.ch_price}}</td>
                <td>     
                    <!-- <button @click="updatelivein(live.ch_id)">编辑</button>         -->
                    <button @click="deletelivein(live.ch_id)">删除</button>                    
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            lives:[],
            input:'',
        }
    },
    methods:{
        selectlivein(){
            const qs=require('qs');            
            axios.post('http://localhost:8080/hotel?method=findbyidlivein',qs.stringify({'value':this.input}))
            //then获取成功；response成功后的返回值（对象）
            .then(response=>{
                console.log(response);
                this.lives=response.data;
            }).catch(error=>{//获取失败
                console.log(error);
            }); 
        },
        deletelivein(chid){
            const qs=require('qs');            
            axios.post('http://localhost:8080/hotel?method=deleteliviin',qs.stringify({'value':chid}))
            //then获取成功；response成功后的返回值（对象）
            .then(response=>{
                console.log(response);
                this.lives=response.data;
                alert("删除成功")
            }).catch(error=>{//获取失败
                console.log(error);
            }); 
        },
    },
    mounted:function(){
        axios.get('http://localhost:8080/hotel?method=listlivein')
            //then获取成功；response成功后的返回值（对象）
            .then(response=>{
                console.log(response);
                this.lives=response.data;
            }).catch(error=>{//获取失败
                console.log(error);
                alert('网络错误，不能访问');
            })
    }
}
</script>

<style>
table{
    margin-top: 5px;
    width: 100%;
    text-align: center;
}
.blank{
    position: relative;
    background:#778899;
    width: 100%;
    height: 30px;
    color: #fff;
    display: flex;
    align-items: center;
}
.blankleft{    
    position: absolute;
    left: 15px;
}
.blankright{
    position: absolute;
    right: 5%;
}
.blankleft input{
    height: 24px;
    border: 0px;
    width: 200px;
    border-radius: 4px;
}
#liveinH{
    font-size: 15px;
    color: #708090;
}
.LiveinPage{
    margin-left: 10px;
}
</style>
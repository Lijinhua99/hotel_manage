<template>
    <div class="roomsPage">
        <p id="roomsH">房间信息管理</p>        
        <div>
            <div class="blank">
                <div class="blankleft">
                    <input placeholder="请输入房间类型" v-model="input">
                    <button @click="selectroom()">查询</button>                
                </div>
                <div class="blankright">
                    <router-link to="/addroom">                
                        <button>添加房间</button>
                    </router-link>
                    <button @click="havebook()">已预订</button>
                    <button @click="havelivein()">已入住</button>
                    <button @click="emptyroom()">查询空房</button>
                    <button @click="allroom()">显示所有</button>
                    <!-- <button>删除房间</button> -->
                </div>
            </div>
            <table align="center" border="1px">
                <tr>
                    <th>房间号</th>
                    <th>房间类型</th>
                    <th>房间价格</th>
                    <th>入住状态</th>
                    <th>预订状态</th>
                    <th>可住人数</th>
                    <th>操作</th>
                </tr>
                <tr v-for="room in rooms" :key="room.id">
                    <td>{{room.id}}</td>
                    <td>{{room.type}}</td>
                    <td>{{room.price}}</td>
                    <td>{{room.state==1?"已入住":"未入住"}}</td>
                    <td>{{room.state==2?"已预定":"无预定信息"}}</td>
                    <td>{{room.ap}}</td>
                    <td>     
                        <router-link :to="{name:'UpdateRoom',params:{id:room.id,type:room.type,price:room.price,state:room.state,roomap:room.ap}}">
                            <button>编辑</button> 
                        </router-link>                               
                        <button @click="deleteroom(room.id)">删除</button> 
                        <router-link :to="{name:'ShowUser',params:{id:room.id,type:room.type,price:room.price,state:room.state,roomap:room.ap}}">
                            <button >查看住户信息</button> 
                        </router-link>    
                    </td>
                </tr>
            </table>
        </div>      
        
        <router-view></router-view>  
    </div>
</template>

<script>
import axios from 'axios';
export default {    
    data() {
        return {
            rooms:[],
            input:'',
            roomid:'',
        }
    },
    methods: {
        allroom(){
            axios.get('http://localhost:8080/hotel?method=listroom')
            //then获取成功；response成功后的返回值（对象）
            .then(response=>{
                console.log(response);
                this.rooms=response.data;
            }).catch(error=>{//获取失败
                console.log(error);
                alert('网络错误，不能访问');
            })
        },
        emptyroom(){
            axios.get('http://localhost:8080/hotel?method=emptyroom')
                //then获取成功；response成功后的返回值（对象）
            .then(response=>{
                console.log(response);
                this.rooms=response.data;
            }).catch(error=>{//获取失败
                console.log(error);
                alert('网络错误，不能访问');
            })
        },
        havelivein(){
            axios.get('http://localhost:8080/hotel?method=haveliveinroom')
                //then获取成功；response成功后的返回值（对象）
            .then(response=>{
                console.log(response);
                this.rooms=response.data;
            }).catch(error=>{//获取失败
                console.log(error);
                alert('网络错误，不能访问');
            })
        },
        havebook(){
            axios.get('http://localhost:8080/hotel?method=havebookroom')
                //then获取成功；response成功后的返回值（对象）
            .then(response=>{
                console.log(response);
                this.rooms=response.data;
            }).catch(error=>{//获取失败
                console.log(error);
                alert('网络错误，不能访问');
            })
        },
        deleteroom(id){
            const qs=require('qs');            
            axios.post('http://localhost:8080/hotel?method=deleteroom',qs.stringify({'value':id}))
            //then获取成功；response成功后的返回值（对象）
            .then(response=>{
                console.log(response);
                alert("删除成功")
                this.rooms=response.data;
            }).catch(error=>{//获取失败
                console.log(error);
                alert('删除失败');
            }); 
        },
        selectroom(){
            if(this.input==null){
                alert("请输入查询信息");
            }else{
                const qs=require('qs');            
                axios.post('http://localhost:8080/hotel?method=findbytyperoom',qs.stringify({'value':this.input}))
                //then获取成功；response成功后的返回值（对象）
                .then(response=>{
                    console.log(response);
                    this.rooms=response.data;
                }).catch(error=>{//获取失败
                    console.log(error);
                    alert('网络错误，不能访问');
                }); 
            }     
            this.input='';                  
        },
    },
    mounted:function(){
        axios.get('http://localhost:8080/hotel?method=listroom')
            //then获取成功；response成功后的返回值（对象）
        .then(response=>{
            console.log(response);
            this.rooms=response.data;
        }).catch(error=>{//获取失败
            console.log(error);
            alert('网络错误，不能访问');
        })
    },
}
</script>

<style scoped>
.router{
    width: 100%;
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
    border-radius: 4px;
}
table{
    margin-top: 5px;
    width: 100%;
    text-align: center;
}

.roomsPage{
    margin-left: 10px;
}
#roomsH{
    font-size: 15px;
    color: #708090;
}
</style>
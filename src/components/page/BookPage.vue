<template>
    <div class="BookPage">
        <p id="bookH">预订信息管理</p>
        <div class="blank">
            <div class="blankleft">
                <input placeholder="请输入身份证号或房间号查询" v-model="input">
                <button @click="selectbyid()">查询</button>                
            </div>
            <div class="blankcenter">
                <input type="date" name="endday" v-model="date">
                <button @click="selectbydate()">查询</button>
            </div>
            <div class="blankright">
                <router-link to="/addbook">
                    <button>添加订单</button>
                </router-link>
            </div>
        </div>

        <table align="center" border="1px">
            <tr >
                <!-- <th><input type="checkbox" id="quornot" v-model="isallcheck" @click="allcheck()">全选/全不选</th> -->
                <th>订单编号</th>
                <th>用户身份证号</th>
                <th>房间号</th>
                <th>预订日期</th>
                <th>操作</th>
            </tr>
                <tr v-for="book in books" :key="book.chid">
                    <!-- <td><input type="checkbox" id="cks" :value="book" v-model="choose"></td> -->
                    <td>{{book.re_id}}</td>
                    <td>{{book.user_id}}</td>   
                    <td>{{book.room_id}}</td>
                    <td>{{book.re_date}}</td>
                    <td>
                        <router-link :to="{name:'UpdateBook',params:{id:book.re_id}}">
                            <button>编辑</button>
                        </router-link>        
                        <button @click="deleteroom(book.re_id)">删除</button>
                    </td>
                </tr>
        </table>  
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            books:[],
            input:'',
            date:'',
            // isallcheck:false,
            choose:[],
        }
    },
    methods: {
        // allcheck(){
        //     this.isallcheck=!this.isallcheck;
        //     if(this.isallcheck){//全选
        //         this.choose=[];
        //         for(let i in this.books){
        //             this.choose.push(this.books[i]);
        //         }
        //     }else{//全不选
        //         this.choose=[];
        //     }            
        // },
        deleteroom(id){
            alert(id);
            const qs=require('qs');            
            axios.post('http://localhost:8080/hotel?method=deletebook',qs.stringify({'value':id}))
            //then获取成功；response成功后的返回值（对象）
            .then(response=>{
                console.log(response);
                this.books=response.data;
            }).catch(error=>{//获取失败
                console.log(error);
            }); 
        },
        selectbydate(){
            if(this.date==''){
                alert("请选择查询日期")
            }else{
                const qs=require('qs');            
                axios.post('http://localhost:8080/hotel?method=findbydatebook',qs.stringify({'value':this.date}))
                //then获取成功；response成功后的返回值（对象）
                .then(response=>{
                    console.log(response);
                    this.books=response.data;
                }).catch(error=>{//获取失败
                    console.log(error);
                    alert('网络错误，不能访问');
                });  
            }                      
        },
        selectbyid(){
            if(this.input==''){
                alert("请输入查询信息")
            }else{
                const qs=require('qs');            
                axios.post('http://localhost:8080/hotel?method=findbyidbook',qs.stringify({'value':this.input}))
                //then获取成功；response成功后的返回值（对象）
                .then(response=>{
                    console.log(response);
                    this.books=response.data;
                }).catch(error=>{//获取失败
                    console.log(error);
                    alert('网络错误，不能访问');
                });  
            }                      
        },
    },
    mounted:function(){
        axios.get('http://localhost:8080/hotel?method=listbook')
            //then获取成功；response成功后的返回值（对象）
        .then(response=>{
            console.log(response);
            this.books=response.data;
        }).catch(error=>{//获取失败
            console.log(error);
            alert('网络错误，不能访问');
        })
    },
}
</script>

<style scoped>
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
.blankcenter{
    position: absolute;
    left: 40%;
    height: 24px;
}
.blankleft input{
    height: 24px;
    border: 0px;
    border-radius: 4px;
}
.BookPage{
    margin-left: 10px;
}
#bookH{
    font-size: 15px;
    color: #708090;
}
</style>
<template>
    <div class="kpiPage">
        <p id="kpiH">业绩统计管理</p>
        <div class="blank">        
            <div class="selectLeft">
                大床房<input type="radio" name="roomsType" :value="1" v-model="checkedValue">
                双床房<input type="radio" name="roomsType" :value="2" v-model="checkedValue">
                家庭房<input type="radio" name="roomsType" :value="3" v-model="checkedValue">
                <button @click="tofindbystyle()">查询</button>
            </div>          
            <div class="selectRight">                
                <input type="date" name="startday" v-model="startday">~
                <input type="date" name="endday" v-model="endday">
                <button @click="tofind()">查询</button>
            </div>     
        </div>
        <table align="center" border="1px">
            <tr >
                <th><input type="checkbox" id="quornot" v-model="isallcheck" @click="allcheck()">全选/全不选</th>
                <th>订单编号</th>
                <th>订房人身份证号</th>                
                <th>房间号</th>
                <th>开始日期</th>
                <th>结束日期</th>
                <th>金额</th>
            </tr>
                <tr v-for="check in checks" :key="check.chid">
                    <td><input type="checkbox" id="cks" :value="check" v-model="choose"></td>
                    <td>{{check.chid}}</td>
                    <td>
                        <router-link :to="{name:'ShowUser',params:{userid:check.userid}}">
                            <input type="submit" :value="check.userid" name="byid">                    
                        </router-link>
                    </td>
                    <td>
                        <router-link :to="{name:'ShowRoom',params:{roomid:check.roomid}}">
                            <input type="submit" :value="check.roomid" name="roombyid">
                        </router-link>  
                    </td>                   
                    <td>{{check.startday}}</td>
                    <td>{{check.endday}}</td>
                    <td>{{check.price}}</td>
                </tr>
            <tr>
                <td colspan="11">
                    <button @click="tosum()">计算总额</button>
                    <button @click="toShowAll()">显示全部</button>
                </td>
            </tr>
        </table>   
    </div>
</template>
<script src="//cdn.bootcss.com/qs/6.5.2/qs.min.js"></script>
<script>
import axios from 'axios';
  export default {
    data() {
      return {
        checks:[],
        checkedValue:'',
        startday:'',
        endday:'',
        choose:[],
        isallcheck:false,
      }
    },
    
    methods: {
        allcheck(){
            this.isallcheck=!this.isallcheck;
            if(this.isallcheck){//全选
                this.choose=[];
                for(let i in this.checks){
                    this.choose.push(this.checks[i]);
                }
            }else{//全不选
                this.choose=[];
            }            
        },
        tosum(){
            var sum=0;            
            for(let i in this.choose){
                sum+=this.choose[i].price;
            }
            alert("总金额为："+sum);
            this.choose=[];
            this.isallcheck=false;
        },
        tofind(){
            if(this.startday==null||this.endday==null){
                alert("请选择查询日期！")
            }else{
                const qs=require('qs');      
                axios.post('http://localhost:8080/hotel?method=findkpi',qs.stringify({'startday':this.startday,'endday':this.endday}))
                //then获取成功；response成功后的返回值（对象）
                .then(response=>{
                    console.log(response);
                    this.checks=response.data;
                }).catch(error=>{//获取失败
                    console.log(error);
                    alert('网络错误，不能访问');
                }); 
            }         
            
        },
        tofindbystyle(){
            const qs=require('qs');            
            axios.post('http://localhost:8080/hotel?method=findbystylekpi',qs.stringify({'value':this.checkedValue}))
            //then获取成功；response成功后的返回值（对象）
            .then(response=>{
                console.log(response);
                this.checks=response.data;
            }).catch(error=>{//获取失败
                console.log(error);
                alert('网络错误，不能访问');
            });            
            this.checkedValue='';
        },
        toShowAll(){
            // this.checks=[];
            axios.get('http://localhost:8080/hotel?method=listkpi')
            //then获取成功；response成功后的返回值（对象）
            .then(response=>{
                console.log(response);
                this.checks=response.data;
            }).catch(error=>{//获取失败
                console.log(error);
                alert('网络错误，不能访问');
            })
        },          
    },
    mounted:function(){
        axios.get('http://localhost:8080/hotel?method=listkpi')
            //then获取成功；response成功后的返回值（对象）
        .then(response=>{
            console.log(response);
            this.checks=response.data;
        }).catch(error=>{//获取失败
            console.log(error);
            alert('网络错误，不能访问');
        })
    },
  }
</script>

<style scoped>
td{
    text-align:center;
}
.selectLeft{    
    position: absolute;
    left: 15px;
}
.selectRight{
    position: absolute;
    right: 5%;
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
table{
    margin-top: 5px;
    width: 100%;
}
#kpiH{
    font-size: 15px;
    color: #708090;
}
.kpiPage{
    margin-left: 10px;
}
</style>
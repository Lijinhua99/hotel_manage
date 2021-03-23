<template>
    <div class="managerPage">
        <div id="leftNav">
            <el-col :span="24">
                <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-s-promotion"></i>
                            <span>功能导航</span>
                        </template>  
                        <router-link to="/rooms">
                            <el-menu-item index="1-1">房间管理</el-menu-item>
                        </router-link>       
                        <router-link to="/book">
                            <el-menu-item index="1-2">预订管理</el-menu-item>
                        </router-link>     
                        <router-link to="/livein">                        
                            <el-menu-item index="1-3">入住管理</el-menu-item>  
                        </router-link>                      
                        <router-link to="/kpi">
                            <el-menu-item index="1-4" v-on="toKpiPage()">业绩管理</el-menu-item>
                        </router-link>
                    </el-submenu>
                </el-menu>
            </el-col>
        </div>
        <div id="content">
            <!-- <Login></Login> -->
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Login from '@/components/page/Login'
export default {
  name: 'ManagerPage',
  data () {
    return {
      message:'',
    }
  },
  methods:{
      toKpiPage(){
        //   this.$r
      },
       handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
  },
  mounted:function(){
      this.$router.push('/login')
  }
  
}
</script>

<style scoped>
el-menu-item{
    width: 150px;
}
.managerPage{
    display: flex;
    margin-top: 10px;
    margin-left: 20px;
    margin-right: 55px;
    height: 450px;
}
#leftNav{
    width: 200px;
}
#content{
    flex: 1;
    margin-left: 5px;
}
</style>

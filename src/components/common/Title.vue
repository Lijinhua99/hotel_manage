<template>
  <div class="titleNav">
      <span id="hotelName">
          松涧酒店
      </span>
      <router-link to="login">
          <span id="managerLogin" v-on="managerLogin()">
            管理登录
        </span>
      </router-link>
      
      <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
    methods:{
        managerLogin() {
            // this.router.replace('/login')
        }
    }
}
</script>

<style scoped>
.titleNav{
    height: 40px;
    margin-left: 50px;
    margin-right: 50px;
    border-bottom: solid 2px #E6E6FA;
    position: relative;
    display: flex;
    align-items: center;
}
#hotelName{
    font-size: 30px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    color: #2F4F4F;
    position: absolute;
    left: 50px;    
}
#managerLogin{
    font-size: 15px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    color: #2F4F4F;
    position: absolute;
    right: 100px;
    text-decoration-line: underline;
}
</style>
<template>
  <div id="app">     
      <Title></Title>   
      <ManagerPage></ManagerPage>   
      <!-- <router-view></router-view> -->

  </div>
</template>

<script>
import ManagerPage from '@/components/page/ManagerPage'
import Title from '@/components/common/Title'
import ManagerLogin from '@/components/page/ManagerLogin'
export default {
  components: { Title,ManagerPage},
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>

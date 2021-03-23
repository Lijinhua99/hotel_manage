<template>
  <div class="managerLogin">
      <div class="login">
          <el-input
            placeholder="请输入账号"
            v-model="input"
            clearable>
        </el-input>
      </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        input: ''
      }
    }
}
</script>

<style>
.managerLogin{
    background: #F0F8FF;
    width: 100%;
}
</style>
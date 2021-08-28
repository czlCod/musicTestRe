<!--  -->
<template>
  <div class="login_btn">
    <a href="" class="login_text">登录</a>

  </div>
</template>

<script>
export default {
  name: "login",
  data () {
    return {
    }
  }
}
</script>

<style  scoped>

.login_btn{
    float: right;
    display: block;
    width: 28px;
    text-align: center;
    line-height: 70px;
    padding: 0 17px;
    
}

.login_text{
color: #787878;
font-style: normal;
}

.login_text:hover{
  /* color: #787878; */
  color: #999;

  text-decoration:underline;
}

</style>

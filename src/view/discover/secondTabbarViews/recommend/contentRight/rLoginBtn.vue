<template>
  <div id="login_box">
    <p id="note">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
    <a href="#" id="loBtn">用户登录</a>
   
  </div>

</template>

<script>
export default {
  name: "rLoginBtn",
  data () {
    return {
    }
  }
}
</script>

<style  scoped>
#login_box{
  width: 100%;
  height: 126px;
  background-color: wheat;
  background-image: url(~img/rloginbtn.png);
  background-position: -1px;
  margin-bottom: 1px;
}

#note{
  display: block;
  width: 205px;
  margin: 0 auto;
  padding: 16px 0;
  line-height: 22px;
}

#loBtn{
  font-size: 12px;
  display: inline-block;
  color: rgb(245, 244, 244);
  background: url(~assets/img/rlogin.png) no-repeat;
  background-size: 100px 30px;
  width: 100px;
  height: 31px;
  margin: 0 75px;
  line-height: 31px;
  text-align: center;
}

#loBtn:hover{
  background: url(~assets/img/rlogin1.png) no-repeat;
  background-size: 100px 30px;
  color: white;
}

</style>

<!--  -->
<template>
  <div class="secTabbar">
    <div class="secTabbar_box">

    <ul class="sec_ul">
      <li><router-link to="recommend">推荐</router-link></li>
      <li><router-link to="topList">排行榜</router-link></li>
      <li><router-link to="playList">歌单</router-link></li>
      <li><router-link to="djRadio">主播电台</router-link></li>
      <li><router-link to="artist">歌手</router-link></li>
      <li><router-link to="album">新碟上架</router-link></li>
    </ul>
    </div>


    <router-view></router-view>
    
  </div>
</template>

<script>
export default {
  name: "secTabbar",
  data () {
    return {
    }
  }
}
</script>

<style  scoped>
.secTabbar{
  width: 1519px;
  height: 35px;
  background-color: rgb(194, 12, 12);
  position: relative;
}

.secTabbar_box{
  display: block;
  width: 1100px;
  height: 34px;
  margin: 0 auto;
}

.sec_ul{
  padding: 0 0 0 201px;
  background-color: rgb(194, 12, 12);
  height: 34px;
}

.sec_ul::after{
  content: '';
  display: inline-block;
  clear: both;
}


.sec_ul>li{
  list-style: none;
  float: left;
  
}

.sec_ul>li>a{
  display: inline-block;
  border-radius: 20px;
  color: white;
  margin: 7px 17px 0;
  padding: 0 13px;
  line-height: 21px;
  height: 20px;
}

.sec_ul>li>a:hover{
  background-color: #9B0909;
}

.isActiveClass{
  background-color: rgb(155, 9, 9);
}


</style>

<!--  -->
<template>
  <div class="mainTabbar">


  <div class="tabbar_wrap">
    
    <!-- tabbar左侧部分 -->
    <logo class="tabbar_left" style="float:left"></logo>
      <!-- tabbar的a -->
    <tabbar-item-left></tabbar-item-left>

    <!-- tabbar 右侧部分 -->
    <login></login>
    <creator-center class=""></creator-center>
    <search-input class=""></search-input>

    </div>
    
  </div>
</template>

<script>
import logo from 'components/tabbar/logo/logo'
import searchInput from 'components/tabbar/searchInput/searchInput'
import creatorCenter from 'components/tabbar/creatorCenter/creatorCenter'
import login from 'components/tabbar/login/login'
import tabbarItemLeft from 'components/tabbar/tabbarItemLeft'







export default {
  name: "mainTabbar",
  data () {
    return {
    }
  },
  components:{
  searchInput,      //搜索框组件
  creatorCenter,    //创作者中心组件
  logo,             //logo图组件
  tabbarItemLeft,   //tabbar左边a部分
  login             //登录按钮组件
  }
}
</script>

<style  scoped>
.mainTabbar{
  height: 70px;
  background-color: #242424;
  width: 1519px;
  top: 0;
  left: 0;
  right: 0;

}

.tabbar_wrap{
 width: 1100px;
  height: 70px;
  margin: 0 auto;

}

.under_tab{
  width: 100%;
  height: 5px;
  background-color: #c20c0c;
}

</style>


<template>
  <div style="float:left">
    <router-link to="/discover" class="tabbar_left_a">发现音乐</router-link>
    <router-link to="/my" class="tabbar_left_a">我的音乐</router-link>
    <router-link to="/friend" class="tabbar_left_a">朋友</router-link>
    <router-link to="/product" class="tabbar_left_a" @click.native="blankClick()">商城</router-link>
    <router-link to="/musician" class="tabbar_left_a" @click.native="blankClick()">音乐人</router-link>
    <router-link to="/download" class="tabbar_left_a hot_icon" @click.native="blankClick()">下载客户端</router-link>
    <!-- <img id="hot_icon" src="~img/hot.svg"> -->
    <img src="~assets/img/hot.svg" id="hot_icon">

  </div>
</template>


<script>




export default {
  name: "component_name",
  data () {
    return {
    }
  },
  methods:{
    blankClick(){
      let {href}= this.$router.resolve({
    path: "/product",  
  });
  window.open(href,'_blank')
    }
  }

}
</script>

<style  scoped>

.tabbar_left_a{
  float: left;
  color: #ccc;
  padding: 0 19px;
  line-height: 70px;
  text-align: center;
  font-size: 14px;
  font-style: normal;
}

a:hover 
{
background-color: rgb(0, 0, 0);
}

.isActiveClass{
  background-color: #000;
  color: white;
}


#hot_icon{
    width: 28px;
    height: 19px;
    margin-top: 15px;
}



</style>

<!--  -->
<template>
  <div class="listTitle">

    <div class="title_left">
      <slot name="titleImg"></slot>
      <a href="#" class="fengmian"></a>
    </div>

    <div class="title_right">
      <div class="Title_text"><h3>飙升榜</h3></div>
      <div class="Title_icon">
          <span class="icon1 iconfont icon-bofang0"></span>
          <span class="icon2 iconfont icon-shoucangjia0"></span>
     </div>

    </div>
    
    

  </div>
</template>

<script>
export default {
  name: "listTitle",
  data () {
    return {
    }
  }
}
</script>

<style  scoped>
.listTitle{
  width: 211px;
  height: 100px;
  padding: 20px 0 0 19px;
  background-color: rgb(244, 244, 244);
  
}

.title_left{
    float: left;
    width: 80px;
    height: 80px;
    position: relative;
}

.title_left>img{
  width: 100%;
  height: 100%;
  /* box-shadow: 0px 10px ; */
  /* -webkit-box-shadow: ; */
}

.title_right{
  float: left;
  margin: 6px 0 0 10px;
}

.Title_text{
  margin-bottom: 5px
}

.icon1{
    font-size: 23px;
    margin-right: 8px;
    color: #ada9a9;
}

.icon2{
  font-size: 20px;
  color: #ada9a9;
}

.icon1:hover,.icon2:hover{
  cursor: pointer;
  color: #888585;
}

</style>

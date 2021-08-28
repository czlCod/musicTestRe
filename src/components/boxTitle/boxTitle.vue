<!--  -->
<template>
  <div>
    <div id="popular_head">
      
        <span class="iconfont icon-yuanquan icon_circle"></span>
        <slot name="title_p"></slot>
      
      <div v-if="hasul">
         <ul id="navigate">
          <li><a href="#" class="pupular_a">华语</a></li>
          <span class="line">|</span>
          <li><a href="#" class="pupular_a">流行</a></li>
          <span class="line">|</span>
          <li><a href="#" class="pupular_a">摇滚</a></li>
          <span class="line">|</span>
          <li><a href="#" class="pupular_a">民谣</a></li>
          <span class="line">|</span>
          <li><a href="#" class="pupular_a">电子</a></li>
        </ul>
      </div>
       
    
      <div id="more">
        <a href="#" class="pupular_a">更多</a>
        <span class="iconfont icon-turnright icon_more"></span>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "boxTitle",
  data () {
    return {
    }
  },
  props:{
    hasul:Boolean
  }
}
</script>

<style  scoped>
#popular_head{
  width: 689px;
  height: 32px;
  border-bottom: 2px solid rgb(193, 13, 12);
}

#navi_title{
  width: 100%;
  height: 100%;
}

.icon_circle{
  font-size: 13.5px;
  font-weight: normal;
  padding: 8px 9px 8px 10px;
  color: rgb(193, 13,12 );
  float: left;
}

#popular_head>p{
  float: left;
  margin: 0;
  font-size: 20px;
  display: inline;
}


#navigate{
  float: left;
  margin: 7px 0 0 12px;
  background-color: white;
}


#navigate>li{
  display: inline-block;
  padding: 0 10px;

}

#more{
  float: right;
  margin: 8px 0 0;
}

.pupular_a{
    color: rgb(102, 102, 102);
}

.pupular_a:hover{
  text-decoration: underline;
}

.line{
  color: #d6d6d6;
}

.icon_more{
  padding-right: 8px;
  float: right;
  font-size: 12px;
  color: red;
  margin: 3px 0 0 6px;
}
</style>

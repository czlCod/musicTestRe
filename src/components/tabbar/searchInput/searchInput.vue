<!--  -->
<template>
  <div class="search_wrap">
    <input type="text" id="search_input" @focus="isShow=false" @blur="isShow=true">
    <label for="search_input" id="input_text" v-show="isShow">音乐/视频/电台/用户</label>
  </div>
</template>

<script>


export default {
  name: "searchInput",
  data () {
    return {
      isShow:true
    }
  },
}
</script>

<style  scoped>

.search_wrap{
    margin-top: 19px;
    background-position: 6px 7px;
    border-radius: 32px; 
    height: 32px;
    width: 158px;
    background-color: #fff;
    background-image:url(~assets/img/search.png);
    background-repeat: no-repeat;
    background-size: 20px;
    position: relative;
    float: right;
}

#search_input{
  
  width: 115.2px;
  height: 16px;
  border: 0;  
  outline: none;
  margin: 7px 28px;
  
}

#input_text{
  position: absolute;
  left: 32px;
  top: 8px;
  color: #9b9b9b;
  cursor:text;
}




</style>

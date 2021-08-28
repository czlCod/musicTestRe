<!--  -->
<template>
  <div class="page_content">
    <router-view></router-view>
    
  </div>
</template>

<script>
export default {
  name: "content",
  data () {
    return {
    }
  }
}
</script>

<style  scoped>
.page_content{
  display: block;
  /* background-color: rgb(238, 192, 238); */
  height: 900px;
 

}

</style>

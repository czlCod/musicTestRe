<template>
  <div id="app">
    
    <main-tabbar></main-tabbar>

    <page-content></page-content>
  </div>
</template>

<script>
import mainTabbar from 'components/tabbar/mainTabbar'
import pageContent from 'components/pageContent/pageContent'


export default {
  name: 'App',
  components: { 
    mainTabbar,
    pageContent
   
  }
}
</script>

<style>

@import "./assets/css/base.css";


</style>



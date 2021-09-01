<template>
  <div class="list_box">
    <box-title :hasul="has">
      <p slot="title_p">榜单</p>
      
    </box-title>

    <div class="list_wrap">

      <list-com></list-com>
    </div>

  </div>
</template>

<script>
import boxTitle from 'components/boxTitle/boxTitle'
import listCom from 'components/listCom/listCom'

export default {
  components: { boxTitle },
  name: "list",
  data () {
    return {
      has:false,
       listArr:[
        {
          id:1,
          name:'飙升榜',
          src:'http://p3.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg', 
        }
      ]
    }
  },
  components:{
    boxTitle,
    listCom
  }
}
</script>

<style  scoped>

.list_box{
  margin-top: 60px;
  width: 689px;
  height: 527px;
  bottom: 0;
  
}


</style>

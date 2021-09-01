<template>
  <div id="popular_box">

   <box-title :hasul="has">
     <p slot="title_p">热门推荐</p>
      
   </box-title>


   <div>
      <ul  class="popular_body">

        <li class="music_box" v-for="(item,index) in popularArr" :key="item.id">

          <div class="box_top">

          <div class="box_bg">
            <a href="#"><img :src="item.src" alt=""></a>
            <div class="bg_tab">
              <span class="iconfont icon-erji icon_listen"></span>
              <p class="li_num">{{item.num}}</p>
              <div @mouseover="showIcon1(index)" @mouseout="showIcon0(index)">
              <span class="iconfont icon-bofang0 icon_play" :class="[index==iconNum?'icon_play_white':'']"></span>
           
              </div>
           </div>
          </div>
        </div>


        <p class="box_bottom">
          <a href="#">{{item.writ}}</a>
        </p>
        </li>
      </ul>
    </div> 
    

  </div>
</template>

<script>
import boxTitle from 'components/boxTitle/boxTitle'
import {getData} from '@/request/axiosSub'

export default {
  name: "popular",
  data () {
    return {
      popularArr:[],
      has:true,
      iconNum:-1
    }
  },
  components:{
    boxTitle

  },
  created(){
    //获取新碟数据
    getData("popular.json")
    .then(res=>{  
      this.popularArr = res.popularArr;
    })
    .catch(err=>{
      console.log(err);
    })
  },
  methods:{
    showIcon1(index){
      this.$data.iconNum=index;
      },
      showIcon0(index){
      this.$data.iconNum=-1;
      },

  }
}
</script>

<style  scoped>
@import './popular.css'

</style>

<template>
  <div class="rotation_box" @mouseover="stopTimer()" @mouseout="turnOnTimer()">

    <div id="bg_blur"></div>
    <!-- 轮播图部分 -->
    <div class="rotation">
          <!-- 上一张按钮 -->
      <span class="iconfont icon-shangyizhang1 clickBtn preview" @click="previewClick()"></span>

      <div class="rotation_left">

        <a href="#"><img :src="swiperImg[0].url" alt="轮播图" id="swiperWin"></a>    
        <div id="rotationAList">
          <a class="Alist_A" href="#" :data-index="0" @click="clickaaa($event)" :class="this.$data.cunrrentIndex == 0?'isactive_a':''"></a>
          <a class="Alist_A" href="#" :data-index="1" @click="clickaaa($event)" :class="this.$data.cunrrentIndex == 1?'isactive_a':''"></a>
          <a class="Alist_A" href="#" :data-index="2" @click="clickaaa($event)" :class="this.$data.cunrrentIndex == 2?'isactive_a':''"></a>
          <a class="Alist_A" href="#" :data-index="3" @click="clickaaa($event)" :class="this.$data.cunrrentIndex == 3?'isactive_a':''"></a>
          <a class="Alist_A" href="#" :data-index="4" @click="clickaaa($event)" :class="this.$data.cunrrentIndex == 4?'isactive_a':''"></a>
          <a class="Alist_A" href="#" :data-index="5" @click="clickaaa($event)" :class="this.$data.cunrrentIndex == 5?'isactive_a':''"></a>
          <a class="Alist_A" href="#" :data-index="6" @click="clickaaa($event)" :class="this.$data.cunrrentIndex == 6?'isactive_a':''"></a>
          <a class="Alist_A" href="#" :data-index="7" @click="clickaaa($event)" :class="this.$data.cunrrentIndex == 7?'isactive_a':''"></a>
          <a class="Alist_A" href="#" :data-index="8" @click="clickaaa($event)" :class="this.$data.cunrrentIndex == 8?'isactive_a':''"></a>
          <a class="Alist_A" href="#" :data-index="9" @click="clickaaa($event)" :class="this.$data.cunrrentIndex == 9?'isactive_a':''"></a>
        </div>
      </div>
      <div class="rotation_right">
        <a href="#" id="download_a"></a>
        <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
        <sup class="download_left"></sup>
        <sup class="download_right"></sup>
      </div>

      <!-- 下一张按钮 -->
    <span class="iconfont icon-xiayizhang1 next clickBtn" @click="nextClick()"></span>

    </div>
    

  </div>
 
</template>

<script>
import {imgChange} from '../../../assets/js/baseUse'
export default {
  name: "swiper",
  data () {
    return {
      cunrrentIndex:-1,
      aIsActive:false,
      timeOne:null,
      swiperImg:[
        {
          url:require('img/one.jpg'),
          id:1
        },
        {
          url:require('img/two.jpg'),
          id:2
        },
        {
          url:require('img/three.jpg'),
          id:3
        },
        {
          url:require('img/four.jpg'),
          id:4
        },
        {
          url:require('img/five.jpg'),
          id:5
        },
        {
          url:require('img/six.jpg'),
          id:6
        },
        {
          url:require('img/seven.jpg'),
          id:7
        },
        {
          url:require('img/eight.jpg'),
          id:8
        },
        {
          url:require('img/nine.jpg'),
          id:9
        },
        {
          url:require('img/ten.jpg'),
          id:10
        }
      ]
    }
  },
  computed:{
 


  },
  mounted(){
    //页面加载后打开计时器
    this.autoSwiper()
    this.timeOne=setInterval(this.autoSwiper,2200)
    
  },
    //页面关闭时关闭计时器
  beforeDestroy(){
    this.stopTimer()
  },
  methods:{
    // 计时器函数
    autoSwiper(){
      const swiperWin = document.getElementById('swiperWin')
      const bg_blur = document.getElementById('bg_blur')
      this.$data.cunrrentIndex++;
      if(this.$data.cunrrentIndex>9)
      {
        this.$data.cunrrentIndex=0;
      }
      setTimeout(()=>{
        swiperWin.className = 'opChange3';
      },0)

      setTimeout(()=>{
        swiperWin.className = 'opChange2';
      },1000)

      setTimeout(()=>{
        swiperWin.className = 'opChange1';
      },2200)

      swiperWin.src=this.$data.swiperImg[this.$data.cunrrentIndex].url; 
      bg_blur.style.backgroundImage ="url("+this.$data.swiperImg[this.$data.cunrrentIndex].url+")";

    },
    
    // 关闭计时器函数
    stopTimer(){
      clearInterval(this.timeOne)
    },

    //启动计时器函数
    turnOnTimer(){
      this.timeOne=setInterval(this.autoSwiper,2200)
    },

    // 点击上一张切换
    previewClick(){
      const swiperWin = document.getElementById('swiperWin')
      const bg_blur = document.getElementById('bg_blur')
      let currentIndex1 = imgChange(this.$data.cunrrentIndex,this.$data.swiperImg.length,true)
      this.$data.cunrrentIndex=currentIndex1;
      swiperWin.src=this.$data.swiperImg[currentIndex1].url; 
      bg_blur.style.backgroundImage ="url("+this.$data.swiperImg[currentIndex1].url+")";
 
    },
    // 点击下一张切换
    nextClick(){
      const swiperWin = document.getElementById('swiperWin')
      const bg_blur = document.getElementById('bg_blur')
      let currentIndex1 = imgChange(this.$data.cunrrentIndex,this.$data.swiperImg.length,false)
      this.$data.cunrrentIndex=currentIndex1;
      swiperWin.src=this.$data.swiperImg[currentIndex1].url; 
      bg_blur.style.backgroundImage ="url("+this.$data.swiperImg[currentIndex1].url+")";

    },
    clickaaa(e){
      const swiperWin = document.getElementById('swiperWin')
      const bg_blur = document.getElementById('bg_blur')
      this.$data.cunrrentIndex = e.currentTarget.dataset.index;
      swiperWin.src=this.$data.swiperImg[this.$data.cunrrentIndex].url; 
      bg_blur.style.backgroundImage ="url("+this.$data.swiperImg[this.$data.cunrrentIndex].url+")";
    },

    
  }, 
  
}
</script>

<style  scoped>
@import "./swiper.css";
</style>

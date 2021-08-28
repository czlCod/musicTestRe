<template>
  <div class="newDisc_box">
    <box-title :hasul="has">
      <p slot="title_p">新碟上架</p>
    </box-title>

    <div class="discContent">
      <span class="leftClick clickSpan iconfont icon-shangyizhang1" @click="canClick === true?ulLeft():''"></span>
      <div class="discList">
        <div class="discListDiv">

          <ul id="ul_first">
          <li class="disc_box" v-for="(item,index) in discArr.slice(0,5)" :key="index">
            <div id="disc_face" @mouseover="iconNum=index" @mouseout="iconNum=-1">
              <img :src="item.src" alt="disc封面">
              <a href="#" class="fengmian"></a>
              <span class="iconfont icon-bofang0 icon_play" :class="[index==iconNum?'iconShow':'']"></span>
            </div>
            <p id="disc_name" class="p_dian"><a href="#">{{item.name}}</a></p>
            
            <p id="disc_author" class="p_dian">
              <a href="#">{{item.author1}}</a>
               <span v-if="item.author2"> / </span>
              <a href="#" v-if="item.author2">{{item.author2}}</a>
            </p>
          </li>
         </ul>

         <ul id="ul_second">
          <li class="disc_box" v-for="(item,index) in discArr.slice(5,10)" :key="index">
            <div id="disc_face" @mouseover="iconNum=index" @mouseout="iconNum=-1">
              <img :src="item.src" alt="disc封面">
              <a href="#" class="fengmian"></a>
              <span class="iconfont icon-bofang0 icon_play" :class="[index==iconNum?'iconShow':'']"></span>
            </div>
            <p id="disc_name" class="p_dian"><a href="#">{{item.name}}</a></p>
            
            <p id="disc_author" class="p_dian">
              <a href="#">{{item.author1}}</a>
               <span v-if="item.author2"> / </span>
              <a href="#" v-if="item.author2">{{item.author2}}</a>
            </p>
          </li>
         </ul>

         <ul id="ul_third">
          <li class="disc_box" v-for="(item,index) in discArr.slice(0,5)" :key="index">
            <div id="disc_face" @mouseover="iconNum=index" @mouseout="iconNum=-1">
              <img :src="item.src" alt="disc封面">
              <a href="#" class="fengmian"></a>
              <span class="iconfont icon-bofang0 icon_play" :class="[index==iconNum?'iconShow':'']"></span>
            </div>
            <p id="disc_name" class="p_dian"><a href="#">{{item.name}}</a></p>
            
            <p id="disc_author" class="p_dian">
              <a href="#">{{item.author1}}</a>
               <span v-if="item.author2"> / </span>
              <a href="#" v-if="item.author2">{{item.author2}}</a>
            </p>
          </li>
         </ul>

         <ul id="ul_fourth">
          <li class="disc_box" v-for="(item,index) in discArr.slice(5,10)" :key="index">
            <div id="disc_face" @mouseover="iconNum=index" @mouseout="iconNum=-1">
              <img :src="item.src" alt="disc封面">
              <a href="#" class="fengmian"></a>
              <span class="iconfont icon-bofang0 icon_play" :class="[index==iconNum?'iconShow':'']"></span>
            </div>
            <p id="disc_name" class="p_dian"><a href="#">{{item.name}}</a></p>
            
            <p id="disc_author" class="p_dian">
              <a href="#">{{item.author1}}</a>
               <span v-if="item.author2"> / </span>
              <a href="#" v-if="item.author2">{{item.author2}}</a>
            </p>
          </li>
         </ul>

        </div>
      </div>

      <span class="rightClick clickSpan iconfont icon-xiayizhang1" @click="canClick === true?ulRight():''"></span>

    </div>




  </div>
</template>

<script>
import boxTitle from 'components/boxTitle/boxTitle'
import {ulChange,removeClass} from 'assets/js/baseUse.js'


export default {
  name: "newDisc",
  data () {
    return {
      has:false,
      discArr:[
        {
          src:'http://p3.music.126.net/WXsoFIM42nsokKujw8n8_w==/109951166289615903.jpg',
          id:1,
          name:'不期而遇的夏天',
          author1:'陈奕迅',
          author2:''
        },
        {
          src:'http://p3.music.126.net/GAgcPJIcOPCNL6mFRNsUZQ==/109951166274648142.jpg',
          id:2,
          name:'Drown feat.Hikari Mitsushima',
          author1:'Kaz',
          author2:''
        },
        {
          src:'http://p3.music.126.net/1Fw7snDXPV0XRQ_lGyilmw==/109951166267616938.jpg',
          id:3,
          name:'蜂蜜人蔘',
          author1:'鱼丁糸',
          author2:''
        },
        {
          src:'http://p3.music.126.net/Um5PpfGlfPZMJj81frDvRw==/109951166274970187.jpg',
          id:4,
          name:'DEPART',
          author1:'蔡健雅',
          author2:''
        },
        {
          src:'http://p4.music.126.net/uM7yWYXH32qmJ94bS3ElDA==/109951166264601014.jpg',
          id:5,
          name:'星月物语Zodiac',
          author1:'NINEONE#',
          author2:''
        },
        {
          src:'http://p3.music.126.net/KS0TddHKX8c3atG3CkmdUw==/109951166264542938.jpg',
          id:6,
          name:'值得更好的',
          author1:'张杰',
          author2:''
        },
        {
          src:'http://p3.music.126.net/cz7vXw_SMoYPKpTat_2lxg==/109951166201691374.jpg',
          id:7,
          name:'6분의1',
          author1:'宣美',
          author2:''
        },
        {
          src:'http://p3.music.126.net/8QwJOommjPIrE0ySwg6vCA==/109951166242390533.jpg',
          id:8,
          name:'うたかた歌',
          author1:'RADWIMPS',
          author2:'菅田将暉'
        },
        {
          src:'http://p3.music.126.net/UxkBzLyM1PRxuE-eV98-4g==/109951166263444318.jpg',
          id:9,
          name:'Happier Than Ever',
          author1:'Billie Eilish',
          author2:''
        },
        {
          src:'http://p3.music.126.net/CKWyX_q5nqUEIZ8DE-BUyQ==/109951166221677689.jpg',
          id:10,
          name:'Drive You Home',
          author1:'王嘉尔',
          author2:'Internet Money'
        },
      ],
      iconNum:-1,
      currentIndex:1,
      canClick:true
    }
    
  },
  components:{
    boxTitle
  },

  methods:{
    async ulLeft(){
       let ulFirst = document.getElementById('ul_first');
      let ulSecond = document.getElementById("ul_second");
      let ulThird = document.getElementById('ul_third');
      let ulFourth = document.getElementById('ul_fourth');
      var currentIndex = this.$data.currentIndex;
      this.$data.canClick = false;
      let ulArr = [ulFirst,ulSecond,ulThird,ulFourth]
    
      this.$data.currentIndex= await ulChange(ulFirst,ulSecond,ulThird,ulFourth,currentIndex,-1)
    setTimeout(() => {
       for (var value of ulArr) {
          value.classList.remove('changeOne')
          this.$data.canClick = true;
        }
     }, 1000);
      
    },
     async ulRight(){
      let ulFirst = document.getElementById('ul_first');
      let ulSecond = document.getElementById("ul_second");
      let ulThird = document.getElementById('ul_third');
      let ulFourth = document.getElementById('ul_fourth');
      var currentIndex = this.$data.currentIndex;
      this.$data.canClick = false;
      let ulArr = [ulFirst,ulSecond,ulThird,ulFourth]
      
  
      this.$data.currentIndex= await ulChange(ulFirst,ulSecond,ulThird,ulFourth,currentIndex,1)
      setTimeout(() => {
       for (var value of ulArr) {
          value.classList.remove('changeOne')
          this.$data.canClick = true;
        }
     }, 1000);
    
   }
  }
}
</script>

<style  scoped>
/* 设置新碟上架大盒子 */
.newDisc_box{
  width: 689px;
  height: 243px;
}

/* 设置新碟内容盒子 */
.discContent{
  width: 687px;
  height: 186px;
  background-color: rgb(245, 245, 245);
  margin-top: 25px;
  position: relative;
}

/* 设置左右按钮 */
.clickSpan{
  font-size: 13px;
  font-weight:bolder;
  display: block;
  padding: 2px;
  color: rgb(129, 124, 124);
  cursor: pointer;
  top: 35%;
  position: absolute;
}

.clickSpan:hover{
  color: black;
}

.leftClick{
  left: 5px;
}

.rightClick{
  right: 5px;
}


/* 设置中间列表的div */
.discList{
  width: 645px;
  height: 180px;
  margin: 0 auto;
  overflow: hidden;
}

/* 设置包装ul的样式 */
.discListDiv{
  left: -645px;
  width: 400%;
  position: relative;
}

/* 设置ul的位置 */
#ul_first{
  position: absolute;
  left: 0px;
}

#ul_second{
  position: absolute;
  left: 645px;
}

#ul_third{
  position: absolute;
  left: 1290px;
}

#ul_fourth{
  position: absolute;
  left: 1935px;
}

/* 设置变化的样式 */

.changeOne{
  transition: left 1s ease-out 0s;
  -webkit-transition: left 1s ease-out 0s;
}

.changeStop{
  transition: none 0 ease 0;
}

/* 设置每一项li */
.disc_box{
    float: left;
    display: inline;
    width: 118px;
    height: 150px;
    margin: 25px 0 0 11px;
   
}

/* 设置图片部分以及背景 */
#disc_face{
  position: relative;
}

.fengmian{
  background-position: 0 -570px;
  width: 118px;
  height: 100px;
  background-image: url(~assets/img/coverall.png);
}


#disc_face>img{
  width: 100px;
  height: 100px;
}

.icon_play{
  font-size: 25px;
  position: absolute;
  right: 25px;
  bottom: 5px;
  color: #e2e2e2;
  display: none;
}

.iconShow{
  display: block;
}



/* 设置文字部分 */
.p_dian{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    display: block;
}

/* 设置名字部分 */
#disc_name{
  margin: 3px 0;
}

/* 设置作者部分 */
#disc_author>a{
  color: rgb(109, 106, 106);
}

</style>

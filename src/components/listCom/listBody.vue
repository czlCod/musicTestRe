<!--  -->
<template>
  
    <ul class="list_body">
      <li v-for="(item,index) in list" :key="item.id" :class="[(index+1)%2==0?'colorChange2':'colorChange1']" @mouseover="showRbox(index)" @mouseout="hiddenRbox(index)">
        <span class="songNum" :class="[index<3?'numColor':'']">{{index+1}}</span>
        <a href="#" class="songName">{{item.name}}</a>
        <div class="three_icon">
          <span class="iconAll iconfont icon-shoucangjia0"></span>
          <span class="iconAll iconfont icon-jiaru"></span>
          <span class="iconAll iconfont icon-bofang0"></span>
        </div>
      </li>
      <span class="watchAll"><a href="#" @click="goTopList()">查看全部></a></span>
    </ul>

  
</template>

<script>
export default {
  name: "listBody",
  data () {
    return {
      
    }
  },
  props:{
    list:{
      type:Array
    },
    listId:{
      type:Number
    }},
  methods:{
    showRbox(index){
      let songName = document.getElementsByClassName("songName")[index];
      let iconThree = document.getElementsByClassName("three_icon")[index]
      songName.style.width = 92+'px';
      iconThree.style.display = "block";
    },
    hiddenRbox(index){
      let songName = document.getElementsByClassName("songName")[index];
      let iconThree = document.getElementsByClassName("three_icon")[index];
      songName.style.width = 170+'px';
      iconThree.style.display = "none"
    },
    goTopList(){
      this.$router.push({name:'排行榜',query:{listId:this.listId}})
    }
    
  }
}
</script>

<style  scoped>
.list_body{
  width: 230px;
  height: 352px;
}

.list_body>li{
  width: 229px;
  height: 32px;
  position: relative;
  border-right: 1px solid rgb(218, 214, 214);
}

.songNum{
  float: left;
  font-size: 16px;
  text-align: center;
  margin-left: 13px;
  width: 35px;
  line-height: 32px;
}

.songName{
  width: 170px;
  line-height: 32px;
  float: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}

.colorChange1{
  background-color: rgb(232, 232, 232);
}

.colorChange2{
  background-color: rgb(244, 244, 244);
}

.three_icon{
  display: none;
  position: absolute;
  right: 0;
  width: 82px;
  margin-top: 7px;
  height: 19px;
}


.iconAll{
  font-size: 17px;
  float: right;
  color: #ada9a9;
  margin: 0 6px 0 0;
}

.iconAll:hover{
   color: #7c7c7c;
   cursor: pointer;
}

.watchAll{
  background-color: rgb(232, 232, 232);
  width: 100%;
  line-height: 32px;
  float: right;
}

.watchAll>a{
  float: right;
  margin-right: 10px;
}

.watchAll>a:hover{
  text-decoration: underline;
}

.numColor{
  color: rgb(211, 24, 24);
}

</style>

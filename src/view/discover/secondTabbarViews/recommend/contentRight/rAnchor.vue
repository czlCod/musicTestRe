<!--  -->
<template>
  <div id="anchor_box">

    <div id="anchor_title">
      <span>热门主播</span>
    </div>

    <div id="anchorList">
        <ul>
          <li  v-for="item in anchorArr" :key="item.id">
            <a href="#">
              <div class="xbox_left">
              <img :src="item.src" alt="anchorphoto">
              </div>
              
              <div class="xbox_right">
              <p  style="color:black">{{item.name}}</p>
              <p>{{item.produce}}</p>
              </div>  
            </a>
          </li>
        </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: "rAnchor",
  data () {
    return {
      anchorArr:[
        {
          src:'http://p1.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg?param=40y40',
          name:'陈立',
          produce:'心理学家、美食家陈立教授'

        },
        {
          src:'http://p1.music.126.net/GgXkjCzeH4rqPCsrkBV1kg==/109951164843970584.jpg?param=40y40',
          name:'刘维-Julius',
          produce:'歌手、播客节目《维维道来》主理人'

        },
        {
          src:'http://p1.music.126.net/C8jFbOTjUOnTKEHX6uuzOg==/109951166239584597.jpg?param=40y40',
          name:'莫非定律MoreFeel',
          produce:'男女双人全创作独立乐团'

        },
        {
          src:'http://p1.music.126.net/NHjNoFpLDEZ-3OR9h35z1w==/109951165825466770.jpg?param=40y40',
          name:'碎嘴许美达',
          produce:'脱口秀网络红人'

        },
        {
          src:'http://p1.music.126.net/CpUdHPNvBvN7kebvL21TTA==/109951163676573083.jpg?param=40y40',
          name:'银临Rachel',
          produce:'古风音乐人'

        },
        
      ]
    }
  }
}
</script>

<style  scoped>
#anchor_box{
  width: 100%;
  height: 294px;
  margin-top: 20px;
  background-color: white;
}

#anchor_title{
  margin: 0 auto;
  width: 210px;
  height: 24px;
  text-align: center;
  border-bottom: 1px solid #c0bfbf;
}

#anchor_title>span{
  float: left;
  color: black;
  font-weight:bolder;
}



#anchorList{
  width: 230px;
  height: 380px;
  margin: 6px 0px 14px 20px;
}

#anchorList>ul{
  width: 100%;
  height: 100%;
  background-color: white;
  list-style: none;
  margin-top: 15px;
}

#anchorList>ul>li{
  width: 210px;
  height: 50px;
  margin-top: 5px;
}

.xbox_left>img{
  float: left;
}

.xbox_right{
  color: black;
  float: left;
  width: 133px;
  height: 50px;
  padding-left: 11px;
  border-left: none;
}


.xbox_right>p{
  margin: 4px 0 0;
  width: 160px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  color: rgb(109, 106, 106);
}

</style>

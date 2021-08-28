<!--  -->
<template v-if="singerArr">
  <div id="singer_box">
    <div id="singer_title">
      <span>入驻歌手</span>
      <a href="#">查看全部 ></a>
    </div>

    <div id="singerList">
        <ul>
          <li  v-for="item in singerArr" :key="item.id">
            <a href="#">
              <div class="xbox_left">
              <img :src="item.src" alt="singerphoto">
              </div>
              
              <div class="xbox_right">
              <h4><span>{{item.name}}</span></h4>
              <p>{{item.produce}}</p>
              </div>  
            </a>
          </li>
      
        </ul>

    </div>

    <div>
      <a href="#" class="sL_bo sL_bo1">
        申请成为网易音乐人
      </a>
    </div>

  </div>
</template>

<script>
export default {
  name: "rSinger",
  data () {
    return {
      singerArr:[
        {
          src:'http://p1.music.126.net/rCsLFXha6SLis0tV7yZ5fA==/109951165588539704.jpg?param=62y62',
          id:1,
          name:'张惠妹aMEI',
          produce:'台湾歌手张惠妹'  
        },
        {
          src:'http://p1.music.126.net/wDxCsT3YEYdNg-UZU_ZKeg==/109951166047225823.jpg?param=62y62',
          id:2,
          name:'Fine乐团',
          produce:'独立音乐人'
        },
        {
          src:'http://p1.music.126.net/TiRAIiIihOgtBgYB6DZRXA==/109951162916034289.jpg?param=62y62',
          id:3,
          name:'萬曉利',
          produce:'民谣歌手、中国现代民谣的代表人物之一'
        },
        {
          src:'http://p1.music.126.net/w_UWOls2uCkFN_U62788Xg==/18806046882229308.jpg?param=62y62',
          id:4,
          name:'音乐人赵雷',
          produce:'民谣歌手'
        },
        {
          src:'http://p1.music.126.net/NDsX060FnCtiDMZN-c_9Gw==/3438172872737957.jpg?param=62y62',
          id:5,
          name:'王三溥',
          produce:'音乐人'
        },
      ]
    }
  }
}
</script>

<style  scoped>
#singer_box{
  width: 100%;
  height: 455px;
  margin: 15px 0 0;
  background-color: white;
}

#singer_title{
  margin: 0 auto;
  width: 210px;
  height: 24px;
  text-align: center;
  border-bottom: 1px solid #c0bfbf;
}

#singer_title>span{
  float: left;
  color: black;
  font-weight:bolder;
}

#singer_title>a{
  float: right;
  font-weight: normal;
  color: #666;
}


#singerList{
  width: 230px;
  height: 380px;
  margin: 6px 0px 14px 20px;
}

#singerList>ul{
  width: 100%;
  height: 100%;
  background-color: white;
  list-style: none;
}

#singerList>ul>li{
  width: 210px;
  height: 62px;
  margin-top: 14px;
}



.xbox_left>img{
  float: left;
}

.xbox_right{
  color: black;
  background-color: rgb(244, 244, 244);
  float: left;
  width: 133px;
  height: 60px;
  padding-left: 14px;
  border: 1px solid #e9e9e9;
  border-left: none;
}

.xbox_right>h4{
  font-size: 14px;
  font-weight: solid;
  margin: 7px 0 0;
}

.xbox_right>p{
  margin: 8px 0 0;
  width: 115px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  color: rgb(109, 106, 106);
}

.sL_bo{
  display: inline-block;
  width: 210px;
  height: 28px;
  margin-left: 20px;
  margin-top: -12px;
  overflow: hidden;
  background: url(~assets/img/apply0.png) no-repeat;
  background-size: 300px 200px;
  background-position: -20px 0;
  border: 1px solid rgb(192, 182, 182);
  border-radius: 4px;
}

.sL_bo{
  text-align: center;
  line-height: 28px;
  color: black;
  font-style:normal;
  font-size: 1px;
  font-weight:800;
}

.sL_bo:hover{
  background: url(~assets/img/apply1.png) no-repeat;
  background-size: 300px 200px;
  background-position: -20px 0;
}

</style>

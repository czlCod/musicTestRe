<!--  -->
<template>
  <div class="listCom">
    <div class="list_wrap1 lo">
      <list-title>
      <img slot="titleImg" :src="titleImg[0]" alt="飙升榜">
      <h3 slot="titleText">飙升榜</h3>
    </list-title>
    <list-body :list="listFirst" :listId="list1Id"></list-body>
    </div>
    <div class="list_wrap1 lo">
      <list-title>
      <img slot="titleImg" :src="titleImg[1]" alt="新歌榜">
      <h3 slot="titleText">新歌榜</h3>
    </list-title>
    <list-body :list="listSecond" :listId="list2Id"></list-body>
    </div>
    <div class="list_wrap1 lo">
      <list-title>
      <img slot="titleImg" :src="titleImg[2]" alt="原创榜">
      <h3 slot="titleText">原创榜</h3>
    </list-title>
    <list-body :list="listThird" :listId="list3Id"></list-body>
    </div>
    
<button id="changeBtn" @click="changeBtn()">点击我切换数据</button>
  </div>
</template>

<script>
import listTitle from 'components/listCom/listTitle'
import listBody from 'components/listCom/listBody'
import {getData} from '@/request/axiosSub'

export default {
  name: "listComponent",
  data () {
    return {
      titleImg:[
        'http://p3.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg',
        'http://p3.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg',
        'http://p3.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg'
      ],
      listFirst:[],
      listSecond:[],
      listThird:[],
      list1Id:111,
      list2Id:222,
      list3Id:333
    }
  },
  components:{
    listTitle,
    listBody
  },
  methods:{
    changeBtn(){
        getData('list2.json').then(res=>{
        this.listFirst = res.listFirst;
        this.listSecond = res.listSecond;
        this.listThird = res.listThird;
        })
    }
  
  },
  created(){
    //获取榜单数组数据
    getData("list.json").then(res=>{  
      this.listFirst = res.listFirst;
      this.listSecond = res.listSecond;
      this.listThird = res.listThird;
     
    })
    
  },
}
</script>

<style  scoped>
.listCom{
  margin-top: 25px;
  width: 690px;
}
.list_wrap1{
  float: left;
  border: 1px solid rgb(218, 214, 214) !important;
}

.lo{
  width: 228px;
}
</style>

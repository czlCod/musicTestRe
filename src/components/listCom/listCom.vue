<!--  -->
<template>
  <div class="listCom">
    <div class="list_wrap1 lo">
      <list-title>
      <img slot="titleImg" :src="titleImg[0]" alt="">
    </list-title>
    <list-body :list="listFirst"></list-body>
    </div>
    <div class="list_wrap1 lo">
      <list-title>
      <img slot="titleImg" :src="titleImg[1]" alt="">
    </list-title>
    <list-body :list="listSecond"></list-body>
    </div>
    <div class="list_wrap1 lo">
      <list-title>
      <img slot="titleImg" :src="titleImg[2]" alt="">
    </list-title>
    <list-body :list="listThird"></list-body>
    </div>
    

  </div>
</template>

<script>
import listTitle from 'components/listCom/listTitle'
import listBody from 'components/listCom/listBody'

export default {
  name: "listComponent",
  data () {
    return {
      titleImg:[
        'http://p3.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg',
        'http://p3.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg',
        'http://p3.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg'
      ],
      listFirst:[
        {
          id:1,
          name:'雨爱',
        },
        {
          id:2,
          name:'Drive You Home',
        },
        {
          id:3,
          name:'可惜不可惜（吉他版）',
        },
        {
          id:4,
          name:'约定（farewell）',
        },
        {
          id:5,
          name:'天上飞',
        },
        {
          id:6,
          name:'艾米丽（温柔版）',
        },
        {
          id:7,
          name:'★kiss me baby☆（吻我，宝）',
        },
        {
          id:8,
          name:'忽然',
        },
        {
          id:9,
          name:'年少的喜欢',
        },
        {
          id:10,
          name:'ANGEL DOLL',
        }
      ],
      listSecond:[
        {
          id:11,
          name:'天上飞'
        },
        {
          id:12,
          name:'独行侠+爱如潮水（remix）'
        },
        {
          id:13,
          name:'心动'
        },
        {
          id:14,
          name:'不期而遇的夏天'
        },
        {
          id:15,
          name:'Don'+'t go'
        },
        {
          id:16,
          name:'雨爱'
        },
        {
          id:17,
          name:'原来我很爱你'
        },
        {
          id:18,
          name:'你值得更好的'
        },
        {
          id:19,
          name:'仿佛昨天'
        },
        {
          id:20,
          name:'篝火旁（再启程）'
        },
      ],
      listThird:[
        {
          id:21,
          name:'银河迪厅'
        },
        {
          id:22,
          name:'篝火旁（再启程）'
        },
        {
          id:23,
          name:'我会想象有一个世界（feat.法老）'
        },
        {
          id:24,
          name:'保质期'
        },
        {
          id:25,
          name:'她是爱'
        },
        {
          id:26,
          name:'WE SMOKE WE DRINK/THEY DON‘T CARE'
        },
        {
          id:27,
          name:'Princess'
        },
        {
          id:28,
          name:'白月光'
        },
        {
          id:29,
          name:'生日快乐'
        },
        {
          id:30,
          name:'无间'
        },
        
        
      ]
      
     
    }
  },
  components:{
    listTitle,
    listBody

  }
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

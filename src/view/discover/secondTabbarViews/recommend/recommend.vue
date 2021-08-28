<!--  -->
<template>
  <div>
    <swiper></swiper>
    <div id="recContent">

        <div id="centerCon">

        <div id="contentLeft">
        <popular></popular>
        <new-disc></new-disc>
        <list></list>

      </div>

      <div id="contentRight">
        <r-login-btn></r-login-btn>
        <r-singer></r-singer>
        <r-anchor></r-anchor>
      </div>
        </div>

    </div>

  <music-bottom></music-bottom>


  </div>
</template>

<script>
import swiper from 'view/discover/swiper/swiper'
import popular from './contentLeft/popular'
import newDisc from './contentLeft/newDisc'
import list from './contentLeft/list'

import rLoginBtn from './contentRight/rLoginBtn'
import rSinger from './contentRight/rSinger'
import rAnchor from './contentRight/rAnchor'

import musicBottom from 'components/bottom/musicBottom'

export default {
  name: "recommend",
  data () {
    return {
    }
  },
  components:{
    swiper,
    popular,
    newDisc,
    list,
    rLoginBtn,
    rSinger,
    rAnchor,
    musicBottom
  }
}
</script>

<style  scoped>

#recContent{
  width: 100%;
  border-bottom: 1px solid #dedede;

}

#centerCon{
  width: 980px;
  height: 1425px;
  margin: 0 auto;
  border: 1px solid #dedede;
  background-color: white;
}

#contentLeft{
  float:left;
  width: 689px;
  height: 1365px;
  padding: 20px 20px 40px;
}

#contentRight{
  width: 250px;
  height: 100%;
  float: left;
  border-left: 1px solid #dedede;
}

</style>

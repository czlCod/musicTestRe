<!--  -->
<template>
  <div id="bottom_wrap">
    <div class="bottom_content">

      <div class="bottom_left">
        <p class="linkArr">
            <a href="#" class="item">服务条款</a>
            <span class="line">|</span>
            <a href="#" class="item">隐私政策</a>
            <span class="line">|</span>
            <a href="#" class="item">儿童隐私政策</a>
            <span class="line">|</span>
            <a href="#" class="item">版权投诉指引</a>
            <span class="line">|</span>
            <a href="#" class="item">意见反馈</a>
            <span class="line">|</span>
            <a href="#" class="item">广告合作</a>
        </p>

        <div class="link pColor">
        <p id="p1">网易公司版权所有©1997-2021</p>
        <p>杭州乐读科技有限公司运营：</p>
        <a href="#" class="pColor">浙网文[2021] 1186-054号</a>
      </div>

      <div class="link pColor">
        <p id="p1">违法和不良信息举报电话：0571-89853516</p>
        <p>举报邮箱：</p>
        <a href="#" class="pColor">ncm5990@163.com</a>
      </div>

  
      <div class="linkArr2">
        <a href="#" id="p1" class="pColor">粤B2-20090191-18 &nbsp; 工业和信息化部备案管理系统网站 </a>
        <a href="#" class="pColor">
          <img src="~assets/img/police.png" id="police" alt="警徽">
          浙公网安备 33010902002564号</a>
      </div>
        

      </div>

      <div class="bottom_right">
        <ul>
          <li class="foot_li">
            <a class="foot_logo logo1" href="#"></a>
            <a class="foot_text text1" href="#"></a>
          </li>
          <li class="foot_li">
            <a class="foot_logo logo2" href="#"></a>
            <a class="foot_text text2" href="#"></a>
          </li>
          <li class="foot_li">
            <a class="foot_logo logo3" href="#"></a>
            <a class="foot_text text3" href="#"></a>
          </li>
          <li class="foot_li">
            <a class="foot_logo logo4" href="#"></a>
            <a class="foot_text text4" href="#"></a>
          </li>
          <li class="foot_li">
            <a class="foot_logo logo5" href="#"></a>
            <a class="foot_text text5" href="#"></a>
          </li>
        </ul>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "musicBottom",
  data () {
    return {
    }
  }
}
</script>

<style  scoped>
#bottom_wrap{
  width: 100%;
  height: 173px;
}

.bottom_content{
  width: 980px;
  height: 115px;
  margin: 0 auto;
}

.bottom_left{
  float: left;
  width: 520px;
  height: 100%;
  margin-top: 15px;
}

.bottom_right{
  width: 420px;
  height: 100%;
  float: right;
  margin-top: 33px;
}

.line{
  padding: 0 8px 0 10px;
}

.item,.line{
  color: #999;
}

a:hover{
  text-decoration: underline;
}

.link,.linkArr{
 height: 24px;
}

.link>p,.link>a{
    float: left;
    padding-right: 5px;
}

.pColor{
  color: #666;
}

#p1{
  padding-right: 15px;
}

#police{
  width: 12px;
  height: 12px;
}

.foot_li{
  float: left;
  margin: 0 10px;
}

.foot_logo{
  display: block;
  width: 50px;
  height: 45px;
  background: url(~assets/img/foot_enter.png) no-repeat;
  background-size: 110px 552px;
}

.foot_text{
  display: inline-block;
  margin: 5px 5px 0;
  width: 52px;
  height: 14px;
  background-size: 180px 139px !important;
  background: url(~assets/img/foot_enter_tt.png) no-repeat;
}

.logo1{
  background-position: -63px -456.5px;
}

.logo2{
  background-position: -63px -101px;
}

.logo3{
  background-position: 0 0;
}

.logo4{
  background-position: -60px -50px;
}

.logo5{
  background-position: 0 -101px;
}

.text1{
  width: 72px;
  margin-left: -8px;
  background-position: 0 -108px;
}

.text2{
  margin-left: -1px;
  background-position: -1px -91px;
}

.text3{
  margin-left: 0px;
  background-position: 0 0;  
}

.text4{
  margin-left: 1px;
  background-position: 0 -54px;
}

.text5{
  margin-left: 2px;
  background-position: -1px -72px;
}
</style>

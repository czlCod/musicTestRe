import Vue from 'vue'
import App from './App'
import router from './router'
// 在终端下载好npm i swiper vue-awesome-swiper@2.6.7 --save
// 引入swiper组件和css样式
// import vueAwesome from 'vue-awesome-swiper'


Vue.config.productionTip = false

// Vue.use(vueAwesome)

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  mounted(){
    this.refreshPage()
  },
  methods:{
    refreshPage(){
      this.$router.replace({name:'推荐'})
    }
  }
})

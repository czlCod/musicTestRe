import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from 'vue-router'

Vue.use(VueRouter);
//解决编程式路由往同一地址跳转时会报错的情况
const originalPush = VueRouter.prototype.push
const originalReplace = VueRouter.prototype.replace
//push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}
//replace
VueRouter.prototype.replace = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalReplace.call(this, location, onResolve, onReject)
    return originalReplace.call(this, location).catch(err => err)
}

// first tabbar文件
const discover =()=> import ('view/discover/discover')
const my =()=> import ('view/my/my')
const friend =()=> import ('view/friend/friend')
const product =()=> import ('view/product/product')
const musician =()=> import ('view/musician/musician')
const download =()=> import ('view/download/download')

// second tabbar文件
const recommend =()=> import ('view/discover/secondTabbarViews/recommend/recommend')
const topList =()=> import ('view/discover/secondTabbarViews/topList/topList')
const playList =()=> import ('view/discover/secondTabbarViews/playList/playList')
const djRadio =()=> import ('view/discover/secondTabbarViews/djRadio/djRadio')
const artist =()=> import ('view/discover/secondTabbarViews/artist/artist')
const album =()=> import ('view/discover/secondTabbarViews/album/album')



Vue.use(Router)

const routes = [
  {
    path:'',
    redirect:'/discover',
  },
  {
    path:'/discover',
    component:discover,
    // discover的子路由
    children:[
      {
        path:'',
        redirect:'recommend'
      },
      {
        path:'recommend',
        name:'推荐',
        component:recommend
      },
      {
        path:'topList',
        name:'排行榜',
        component:topList
      },
      {
        path:'playList',
        name:'歌单',
        component:playList
      },
      {
        path:'djRadio',
        name:'主播电台',
        component:djRadio
      },
      {
        path:'artist',
        name:'歌手',
        component:artist
      },
      {
        path:'album',
        name:'新碟上架',
        component:album
      }
    ]
  },
  {
    path:'/my',
    name:'我的',
    component:my
  },
  {
    path:'/friend',
    name:'朋友',
    component:friend
  },
  {
    path:'/product',
    name:'商城',
    component:product
  },
  {
    path:'/musician',
    name:'音乐人',
    component:musician
  },
  {
    path:'/download',
    name:'下载',
    component:download
  }
]

export default new Router({
  routes,
  mode:'history',
  linkActiveClass:'isActiveClass',
  linkExactActiveClass:'chhildActive'
  
})

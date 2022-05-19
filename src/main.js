import Vue from 'vue'
import App from './App.vue'

import Typenav from '@/components/Typenav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
//第一个参数全局组件的名字，第二个参数：那一个组件
Vue.component(Typenav.name,Typenav);
Vue.component(Carousel.name,Carousel)
Vue.component(Pagination.name,Pagination)

// 引入路由
import router from "@/router"

// 引入仓库
import store from './store';

import "@/mock/mockServe";

import "swiper/css/swiper.css"


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus=this
  },
  // 注册路由
  router,
  //注册仓库
  store
}).$mount('#app')

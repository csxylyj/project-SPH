import Vue from 'vue'
import App from './App.vue'

import Typenav from '@/components/Typenav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
import {Button,MessageBox} from 'element-ui'


//第一个参数全局组件的名字，第二个参数：那一个组件
Vue.component(Typenav.name,Typenav);
Vue.component(Carousel.name,Carousel)
Vue.component(Pagination.name,Pagination)

Vue.component(Button.name,Button)
Vue.prototype.$msgbox=MessageBox
Vue.prototype.$alert=MessageBox.alert

// 引入路由
import router from "@/router"

// 引入仓库
import store from './store';

import "@/mock/mockServe";

import "swiper/css/swiper.css"
import * as API from '@/api/index'


Vue.config.productionTip = false

import atm from "@/assets/1.gif"
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload,{
  loading:atm
})

//引入表单验证插件
import VeeValidate from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'
Vue.use(VeeValidate)
VeeValidate.Validator.localize('zh_CN',{
  messages:{
    ...zh_CN.messages,
    is:(field)=>`${field}必须与密码相同`
  },
  attributes:{
    phone:'手机号',
    code:'验证码',
    password:'密码',
    password1:'确认密码',
    agree:'协议'
  }
});
VeeValidate.Validator.extend('tongyi',{
  validate:(value)=>{
    return value
  },
  getMessage:(field)=>field+"必须同意"
})



new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus=this
    Vue.prototype.$API = API
  },
  // 注册路由
  router,
  //注册仓库
  store
}).$mount('#app')

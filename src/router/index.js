// 配置路由
import Vue from "vue";
import VueRouter from "vue-router";

import routes from "./routes"
import store from '@/store';


//保存原有的push方法
let originPush = VueRouter.prototype.push;
//重写push
//告诉原来的push方法，往哪跳转（传递哪些参数）
VueRouter.prototype.push = function(location,resolve,reject){
    if(resolve && reject){
        originPush.call(this,location,resolve,reject)
    }else{
        originPush.call(this,location,()=>{},()=>{});
    }
}

//call和apply的区别：
// 相同点：都可以调用函数一次，都可以篡改函数的上下文一次
// 不同点：call和apply传递参数，call传递参数用逗号隔开，apply方法执行，传递数组


//保存原有的replace方法
let originReplace = VueRouter.prototype.replace;
//重写replace
//告诉原来的replace方法，往哪跳转（传递哪些参数）
VueRouter.prototype.replace = function(location,resolve,reject){
    if(resolve && reject){
        originReplace.call(this,location,resolve,reject)
    }else{
        originReplace.call(this,location,()=>{},()=>{});
    }
}


// 使用插件
Vue.use(VueRouter)
// 配置路由
let router = new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        // 始终滚动到顶部
        return { y: 0 }
      }
})

router.beforeEach(async (to,from,next)=>{
    next()
    let token = store.state.user.token
    let name = store.state.user.userInfo.name
    if(token){
        if(to.path=="/login"||to.path=="/register"){
            next('/home')
        }else{
            if(name){
                next()
            }else{
                try {
                    await store.dispatch("userInfo")
                    next()
                } catch (error) {
                    await store.dispatch("userLogout")
                    next("/login")
                }
            }
        }
    }else{
        let topath = to.path
        if(topath.indexOf('/trade')!=-1||topath.indexOf('/center')!=-1||topath.indexOf('/center')!=-1){
            next("/login?redirect="+topath)
        }else{
            next()
        }
    }
})

export default router;
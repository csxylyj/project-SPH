//对axios进行二次封装
import axios from 'axios'

//引入进度条
import nprogress from 'nprogress'
//引入进度条样式
import "nprogress/nprogress.css"

//为每个用户添加临时ID
import store from '../store'

//创建Axios实例
const requests = axios.create({
    baseURL:'/api',
    timeout:5000
})

//请求拦截器
requests.interceptors.request.use((config)=>{
    if(store.state.detail.uuid_token){
        config.headers.userTempId = store.state.detail.uuid_token
    }
    //进度条开始
    nprogress.start()
    return config
})

//响应拦截器
requests.interceptors.response.use((res)=>{
    //进度条结束
    nprogress.done()
    return res.data;
},(error)=>{
    console.log('响应失败')
});


//对外暴漏
export default requests;
//对所有的接口进行统一的管理
import requests from "./request";

import mockRequests from "./mockAjax"


//发送请求
export const reqCategoryList = ()=>requests({url:'/product/getBaseCategoryList',method:'get'})

export const reqBannerList = ()=>mockRequests({url:'/banner',method:'get'})

export const reqFloorsList = ()=>mockRequests({url:'/floors',method:'get'})

export const reqSearchInfo = (params)=>requests({url:'/list',method:"post",data:params})

export const reqGoodsInfo = (skuId) => requests({url:`/item/${skuId}`,method:"get"}) 

export const reqAddorUpadteShop = (skuId,skuNum) => requests({url:`/cart/addToCart/${skuId}/${skuNum}`,method:'post'})

export const reqGetShopList = () => requests({url:"/cart/cartList",method:'get'})

export const reqDeleteCartById = (skuId) => requests({url:`/cart/deleteCart/${skuId}`,method:'delete'})

export const reqUpdateCheckById = (skuId,isChecked) =>requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'get'})

export const reqGetCode =(phone) => requests({url:`/user/passport/sendCode/${phone}`,method:"get"})

export const reqUserRegister =(data) => requests({url:"/user/passport/register",data,method:'post'})

export const reqUserLogin =(data) => requests({url:"/user/passport/login",data,method:'post'})

export const reqUserInfo = ()=> requests({url:'/user/passport/auth/getUserInfo',method:'get'}) 

export const reqLogout = () => requests({url:"/user/passport/logout",method:"get"})

export const reqAddressInfo =()=> requests({url:"/user/userAddress/auth/findUserAddressList",method:"get"})

export const reqOrderInfo =() => requests({url:'/order/auth/trade',method:'get'})
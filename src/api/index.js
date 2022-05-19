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

// /api/cart/checkCart/{skuID}/{isChecked}
export const reqUpdateCheckById = (skuId,isChecked) =>requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'get'})
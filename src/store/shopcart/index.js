import { reqDeleteCartById, reqGetShopList, reqUpdateCheckById } from "../../api";

const state ={
    cartList:[]
}
const mutations={
    GETCARTLIST(state,cartList){
        state.cartList = cartList
    }
}
const actions={
    async getCartList({commit}){
        let result = await reqGetShopList()
        commit("GETCARTLIST",result.data)
    },
    async deleteCartById({commit},skuId){
        let result = await reqDeleteCartById(skuId)
        if(result.code == 200){
            return 'ok'
        }else{
            return Promise.reject(new Error("faile"))
        }
    },
    async updateCheckById({commit},{skuId,isChecked}){
        let result = await reqUpdateCheckById(skuId,isChecked) 
        if(result.code == 200){
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    }     
}
const getters={
    cartList(state){
        return state.cartList[0]||{}
    }
}

export default{
    state,
    mutations,
    actions,
    getters
}
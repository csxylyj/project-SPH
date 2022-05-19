import { reqGoodsInfo,reqAddorUpadteShop} from "../../api"
import {getUUID} from "@/utils/uuid_token"
const state={
    goodInfo:{},
    uuid_token:getUUID()
}
const mutations={
    GETGOODINFO(state,goodInfo){
        state.goodInfo=goodInfo
    }
}
const actions = {
    async getGoodInfo({commit},skuId){
        let result = await reqGoodsInfo(skuId)
        if(result.code == 200){
            commit("GETGOODINFO",result.data)
        }
    },
    async reqAddorUpadteShop({commit},{skuId,skuNum}){
        let result = await reqAddorUpadteShop(skuId,skuNum)
        if(result.code==200){
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    }
}
const getters = {
    categoryView(state){
        return state.goodInfo.categoryView||{}
    },
    skuInfo(state){
        return state.goodInfo.skuInfo||{}
    },
    spuSaleAttrList(state){
        return state.goodInfo.spuSaleAttrList||[]
    }
}
export default{
    state,
    mutations,
    actions,
    getters
}
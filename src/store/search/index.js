//search模块的小仓库
import { reqSearchInfo } from "../../api"

const state = {
    searchList:{}
}
const mutations = {
    GETSEARCHINFO(state,searchList){
        state.searchList = searchList
    }
}
const actions = {
    async getSearchInfo({commit},params={}){
        let result =await reqSearchInfo(params)
        if(result.code==200 ){
            commit("GETSEARCHINFO",result.data)
        }
    }
}
//主要作用简化数据
const getters = {
    attrsList(state){
        return state.searchList.attrsList
    },
    goodsList(state){
        return state.searchList.goodsList
    },
    trademarkList(state){
        return state.searchList.trademarkList
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}
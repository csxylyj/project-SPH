//home模块的小仓库

import { reqCategoryList,reqBannerList,reqFloorsList } from "../../api"

// //仓库存储数据的地方
const state = {
    categroyList:[],
    bannerList:[],
    floorsList:[]
}
// // 修改state的唯一手段
const mutations = {
    CATEGTOYLIST(state,categroyList){
        state.categroyList=categroyList
    },
    GETBANNERLIST(state,bannerList){
        state.bannerList = bannerList
    },
    GETFLOORSLIST(state,floorsList){
        state.floorsList = floorsList
    }
}
// // 处理action，可以书写自己的业务逻辑，可以处理异步
const actions = {
    async categroyList({commit}){
        let result = await reqCategoryList()
        if(result.code==200){
            commit("CATEGTOYLIST",result.data)
        }
    },
    async getBannerList({commit}){
        let result = await reqBannerList()
        if(result.code==200){
            commit("GETBANNERLIST",result.data)
        }
    },
    async getFloorsList({commit}){
        let result = await reqFloorsList()
        if(result.code == 200){
            commit("GETFLOORSLIST",result.data)
        }
    }
}
// // 理解为计算属性。用于简化仓库数据。让组件获取仓库数据更加方便
const getters = {}
export default {
    state,
    mutations,
    actions,
    getters
}
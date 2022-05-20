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
    },
    deleteAllCheck({dispatch,getters}){
        let PromiseAll = []
        getters.cartList.cartInfoList.forEach(item => {
            let promise =item.isChecked==1?dispatch("deleteCartById",item.skuId):""
            PromiseAll.push(promise)
        });
        return Promise.all(PromiseAll)
    },
    isAllChecked({dispatch,state},isChecked){
        let PromiseAll = []
        state.cartList[0].cartInfoList.forEach((item)=>{
            let promiseAll = dispatch("updateCheckById",{skuId:item.skuId,isChecked})
            PromiseAll.push(promiseAll)
        })
        return Promise.all(PromiseAll)
    }
}
const getters={
    cartList(state){
        return state.cartList[0]||{}
    },
    checkedNum(state){
        let num = 0
        if(state.cartList[0]){
            state.cartList[0].cartInfoList.forEach((item)=>{
                if(item.isChecked==1) num++
            })
        }
        return num
    }
}

export default{
    state,
    mutations,
    actions,
    getters
}
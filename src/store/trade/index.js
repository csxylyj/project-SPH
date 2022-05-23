import { reqAddressInfo, reqOrderInfo } from "../../api"

const state={
    address:[],
    order:{}
}
const mutations={
    GETADDRESS(state,address){
        state.address=address
    },
    GETORDER(state,order){
        state.order=order
    }
}
const actions={
    async getAddress({commit}){
        let result =await reqAddressInfo()
        if(result.code==200){
            commit("GETADDRESS",result.data)
        }
    },
    async getOrder({commit}){
        let result = await reqOrderInfo()
        if(result.code==200){
            commit("GETORDER",result.data)
        }
    }
}
const getters={}
export default{
    state,
    mutations,
    actions,
    getters
}
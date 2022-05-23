import { reqGetCode ,reqLogout,reqUserInfo,reqUserLogin,reqUserRegister} from "../../api";

const state={
    code:'',
    token:localStorage.getItem('TOKEN'),
    userInfo :{}
}
const mutations={
    GETCODE(state,code){
        state.code =code
    },
    USERLOGIN(state,token){
        state.token=token
    },
    USERINFO(state,userInfo){
        state.userInfo=userInfo
    },
    LOGOUT(state){
        state.token='',
        state.userInfo={},
        localStorage.removeItem("TOKEN")
    }
}
const actions={
    async getCode({commit},phone){
        let result = await reqGetCode(phone)
        if(result.code == 200){
            commit("GETCODE",result.data)
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    async userRegister({commit},user){
        let result = await reqUserRegister(user)
        if(result.code==200){
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    async userLogin({commit},user){
        let result = await reqUserLogin(user)
        if(result.code==200){
            commit("USERLOGIN",result.data.token)
            localStorage.setItem('TOKEN',result.data.token)
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    async userInfo({commit}){
        let result = await reqUserInfo()
        if(result.code==200){
            commit("USERINFO",result.data)
        }
    },
    async userLogout({commit}){
        let result = await reqLogout()
        if(result.code==200){
            commit("LOGOUT")
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
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
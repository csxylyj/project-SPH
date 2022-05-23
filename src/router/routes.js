import Home from "@/pages/Home"
import Search from "@/pages/Search"
import Login from "@/pages/Login"
import Register from "@/pages/Register"
import Detail from "@/pages/Detail"
import AddCartSuccess from "@/pages/AddCartSuccess"
import ShopCart from "@/pages/ShopCart"
import Trade from "@/pages/Trade"

export default [
    {
        path:"/trade",
        component:Trade,
        meta:{
            show:true
        }
    },
    {
        path:"/shopCart",
        component:ShopCart,
        meta:{
            show:true
        }
    },
    {
        path:"/addCartSuccess",
        name:'addCartSuccess',
        component:AddCartSuccess,
        meta:{
            show:true
        }
    },
    {
        path:"/detail/:skuId",
        component:Detail,
        meta:{
            show:true
        }
    },
    {
        path:"/home",
        component:Home,
        meta:{
            show:true
        }
    },
    {
        path:"/search/:keyword?",
        component:Search,
        meta:{show:true },
        name:"search"
    },
    {
        path:"/login",
        component:Login,
        meta:{
            show:false
        }
    },
    {
        path:"/register",
        component:Register,
        meta:{
            show:false
        }
    },
    {
        path:'*',
        redirect:'/home'
    }
]
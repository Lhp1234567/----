import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '../pages/Home/index'
import Register from '@/pages/Register/index'
import search from '../pages/Search/index'
import Login from '../pages/Login/index'

// 创建并暴露路由
export default new VueRouter({
   
    // 配置；路由
    routes: [
        {
            path:"/home",
            component:Home,
            meta:{show:true}
            
        },
        {
            path:"/register",
            component:Register,
            meta:{show:false}
            
        },
        {
            name:'search',
            path:"/search",
            component:search,
            meta:{show:true}
            
        },
        {
            path:"/login",
            component:Login,
            meta:{show:false}
            
        },
        {
            path:'*',
            redirect:'/home'
        }
    ]
})
import Vue from "vue"
import Vuex from "vuex"
import home from "./Home"
import search from "./search"
Vue.use(Vuex)
Vue.config.devtools = true
export default new Vuex.Store({
    // vuex模块式开发，把一个大仓库分解成小仓库
    modules:{
        home,
        search
    }
   
 
})
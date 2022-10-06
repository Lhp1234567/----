import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import TapeNav from '@/components/TapeNav'
Vue.config.productionTip = false
Vue.config.devtools = true
//设置全局组件
Vue.component(TapeNav.name,TapeNav)
import store from "@/Store"
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

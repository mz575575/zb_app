import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import bootstrap from "bootstrap"
import $ from "jquery"
Vue.config.productionTip = false
// console.log($)

Vue.use(bootstrap)
Vue.prototype.$=$;

new Vue({
  
  router,
  store,
  render: h => h(App)
}).$mount('#app')

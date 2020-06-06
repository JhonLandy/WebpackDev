import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import Router from "vue-router"
import create from "./utils/create"
import Notice from "./components/Notice"
Vue.use(ElementUI);
Vue.use(Router);

Vue.config.productionTip = false
Vue.prototype.$notice = function(option) {
    return create(Notice, option)
}
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

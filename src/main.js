// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "@/common/css/index.scss"
import core from "@/core/core.config"
import 'lib-flexible/flexible.js'
Vue.use(core)
Vue.config.productionTip = false

import store from "@/core/store/index"

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
})

import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import UIkit from 'uikit'
import 'uikit/dist/css/uikit.css'
import 'uikit/dist/css/uikit.min.css'


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

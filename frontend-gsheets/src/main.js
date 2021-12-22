import Vue from 'vue'
import App from './App.vue'
import router from './router'

// import stylesheets
import '../public/assets/css/bootstrap.min.css' 
import '../public/assets/css/now-ui-kit.css' 
import '../public/assets/demo/demo.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: val => val(App)
}).$mount('#app')

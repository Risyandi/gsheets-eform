import Vue from 'vue'
import App from './App.vue'
import router from './router'

// import stylesheets
import '../src/assets/css/bootstrap.min.css' 
import '../src/assets/css/now-ui-kit.css' 
import '../src/assets/demo/demo.css'

// import external library
// import '../src/assets/js/core/jquery.min.js'
// import '../src/assets/js/core/popper.min.js'
// import '../src/assets/js/core/bootstrap.min.js'
// import '../src/assets/js/plugins/bootstrap-switch.js'
// import '../src/assets/js/plugins/nouislider.min.js'
// import '../src/assets/js/plugins/bootstrap-datepicker.js'
// <!-- <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script> -->
// import '../src/assets/js/now-ui-kit.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: val => val(App)
}).$mount('#app')

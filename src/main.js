import Vue from 'vue'
import App from './App.vue'
import './assets/css/reset.css'
import smoothScroll from 'vue-smoothscroll'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(smoothScroll)
Vue.config.productionTip = false
Vue.use(VueAxios, axios)

new Vue({
  render: h => h(App),
}).$mount('#app')

// npm install --save axios vue-axios を実行してデータにアクセスできるようにする



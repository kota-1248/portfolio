import Vue from 'vue'
import App from './App.vue'
import './assets/css/reset.css'
import smoothScroll from 'vue-smoothscroll'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
Vue.use(smoothScroll)
Vue.config.productionTip = false
Vue.use(VueAxios, axios)

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')

// npm install --save axios vue-axios を実行してデータにアクセスできるようにする



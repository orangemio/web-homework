import Vue from 'vue'
import App from './components/app.vue'
import './plugins/element.js'
import store from './store/Store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')

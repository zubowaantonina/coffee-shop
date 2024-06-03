import Vue from 'vue'
import App from './App.vue'
import './assets/scss/style.scss'
// import FirstComponent from './components/FirstComponent'
Vue.config.productionTip = false
// Vue.component('first-component',FirstComponent)
new Vue({
  render: h => h(App)
}).$mount('#app')

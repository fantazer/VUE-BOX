import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/style.styl';
import SvgIcon from './components/SvgIcon'

Vue.component('svg-icon', SvgIcon)

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')

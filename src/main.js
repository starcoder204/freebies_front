import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Loading from 'vue-loading-overlay'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'font-awesome/css/font-awesome.min.css'
import 'vue-loading-overlay/dist/vue-loading.css'
import './assets/css/main.scss'
import './assets/css/theme.css'
import { i18n } from './lang/i18n.js'
import { Trans } from './lang/Translation'

Vue.component('VueFontawesome', require('vue-fontawesome-icon/VueFontawesome.vue').default)
Vue.prototype.$i18nRoute = Trans.i18nRoute.bind(Trans)

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Loading)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

/*
 * @Author: zdh
 * @Date: 2023-07-14 11:03:25
 * @LastEditTime: 2023-08-02 16:15:38
 * @Description: 
 */
import Vue from 'vue'

import App from './App.vue'

import router from './router/index.js'


import '@/resource/styles/index.scss' // global css

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);


import plugins from '@/utils/plugins/index.js'
console.log('-----------')
console.dir(plugins)
Vue.use(plugins)



// import tools from '@/utils/tools/index.js'
// Vue.prototype.$tools = tools

// import api from '@/api/index.js'
// Vue.prototype.$api = api

// import '@/utils/plugins/index.js'


import { createPinia, PiniaVuePlugin } from 'pinia'
Vue.use(PiniaVuePlugin)

import pinia from '@/store/index' //引入实例

new Vue({
	pinia,
	router,
  render: h => h(App)
}).$mount('#app')

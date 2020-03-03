/*
 * @Descripttion:
 * @version:
 * @Author: zoucw (zoucw@yunjiglobal.com)
 * @Date: 2020-02-29 01:40:47
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-03-03 15:56:40
 */
import Vue from 'vue'
import element from 'lib/index'
import App from './App.vue'

Vue.use(element)
Vue.config.productionTip = false

new Vue({
  render: (h) => h(App)
}).$mount('#app')

/*
 * @Descripttion: 
 * @version: 
 * @Author: zoucw (zoucw@yunjiglobal.com)
 * @Date: 2020-02-29 01:40:47
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-03-03 15:55:36
 */
import component1 from './src/component1.vue'

component1.install = (Vue) => {
  Vue.component(component1.name, component1)
}

export default component1

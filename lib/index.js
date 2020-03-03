/*
 * @Descripttion: test
 * @version: 1.0.0
 * @Author: zoucw (zoucw@yunjiglobal.com)
 * @Date: 2020-02-29 01:40:47
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-03-03 14:17:56
 */
import component1 from 'lib/component1'
import component2 from 'lib/component2'

const components = [
  component1,
  component2
]

function install(Vue) {
  components.forEach((component) => { Vue.component(component.name, component) })
}
export {
  install,
  component1,
  component2
}
export default {
  install,
  component1,
  component2
}

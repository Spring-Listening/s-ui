<!--
 * @Descripttion:
 * @version:
 * @Author: zoucw (zoucw@yunjiglobal.com)
 * @Date: 2020-02-29 01:40:47
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-03-03 15:55:09
 -->
<template>
  <div class="c">
    <span class="component1">组件component1</span>
    <Button type="primary">我的是第三方</Button>
    <Button type="success" plain>我的是第三方</Button>
  </div>
</template>

<script>
import { Button } from 'element-ui'

export default {
  name: 'component1',
  data() {
    return {
    }
  },
  components: {
    Button
  },
  methods: {

  },
  created() {
    
  }
}
</script>
<style lang="less" scoped>
@import '~static/var.less';
.component1{
  color: @color-primary;
}
</style>

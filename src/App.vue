<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// import { ElButton } from 'element-plus'
/* import 'element-plus/lib/theme-chalk/base.css'
import 'element-plus/lib/theme-chalk/el-button.css' */

export default defineComponent({
  name: 'App',
  components: {
    // ElButton
  },
  props: {
    name: {
      type: String
    }
  },
  setup(props) {
    props.name
  }
})
</script>

<style lang="less">
.app {
  height: 100%;
}
</style>

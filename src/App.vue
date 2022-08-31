<template>
  <div class="app">
    <el-config-provider :locale="zhCn">
      <router-view></router-view>
    </el-config-provider>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

// import { ElButton } from 'element-plus'
/* import 'element-plus/lib/theme-chalk/base.css'
import 'element-plus/lib/theme-chalk/el-button.css' */

export default defineComponent({
  name: 'App',
  components: {
    // ElButton,
    ElConfigProvider
  },
  props: {
    name: {
      type: String
    }
  },
  setup() {
    // props
    // props.name
    return {
      zhCn
    }
  }
})
</script>

<style lang="less">
.app {
  height: 100%;
}
</style>

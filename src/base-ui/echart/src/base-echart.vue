<template>
  <div class="base-echart">
    <div ref="echartDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, defineProps, withDefaults, watchEffect } from 'vue'
// import * as echarts from 'echarts'
import { EChartsOption } from 'echarts'

import useEcharts from '../hooks/useEchart'

// 定义props
/* defineProps({
  width: String,
  height: String
}) */
/* defineProps<{
  width: string,
  height: string
}>() */
// 带默认值和可选
const props = withDefaults(
  defineProps<{
    options: EChartsOption
    width?: string
    height?: string
  }>(),
  {
    width: '100%',
    height: '360px'
  }
)

const echartDivRef = ref<HTMLElement>()
// echartDivRef.value在执行时可能还没值（解决办法：放入onMounted中）
// const echartInstance = echarts.init(echartDivRef.value)
onMounted(() => {
  /* const echartInstance = echarts.init(echartDivRef.value!)
  echartInstance.setOption(props.options) */

  const { setOptions } = useEcharts(echartDivRef.value!)
  // setOptions(props.options) // props.options数据改变需要重新进行配置的设置
  watchEffect(() => {
    setOptions(props.options)
  })
})
</script>

<style scoped></style>

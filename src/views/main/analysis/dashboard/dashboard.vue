<template>
  <div class="dashboard">
    <h2>
      <div ref="divRef" :style="{ width: '600px', height: '500px' }"></div>
    </h2>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'

import * as echarts from 'echarts'

export default defineComponent({
  name: 'dashboard',
  setup() {
    const divRef = ref<HTMLElement>()
    // const echartInstance = echarts.init(divRef.value) // 报错：divRef.value可能还没有进行初始化 值为undefined
    onMounted(() => {
      // 1、初始化echarts实例
      // echarts.init(dom, theme(主题light/dark), renderer(渲染器svg/canvas))
      const echartInstance = echarts.init(divRef.value!, 'light', {
        renderer: 'svg'
      })

      // 2、编写配置文件
      var option = {
        title: {
          text: 'ECharts 入门示例',
          subtext: '哈哈哈哈'
        },
        tooltip: {
          trigger: 'axis',
          // 轴线
          axisPointer: {
            type: 'cross'
          }
        },
        // 图例
        legend: {
          // legend里面的data可以自动提取（series.name）
          // data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      }

      // 3、使用刚指定的配置项和数据显示图表，设置配置，并且开始绘制
      echartInstance.setOption(option)
    })

    return {
      divRef
    }
  }
})
</script>

<style scoped></style>

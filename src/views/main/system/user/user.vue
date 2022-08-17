<template>
  <div class="user">
    <div class="search">
      <!-- <hy-form
        :formItems="formItems"
        :labelWidth="labelWidth"
        :itemStyle="itemStyle"
        :colLayout="colLayout"
      /> -->
      <hy-form v-bind="formConfig" />
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// import HyForm, { IFormItem, IForm } from '@/base-ui/form'
import HyForm from '@/base-ui/form'

import { formConfig } from './config/search.config'

export default defineComponent({
  name: 'user',
  components: {
    HyForm
  },
  setup() {
    /* const formItems: IFormItem[] = [
      {
        type: 'input',
        label: 'id',
        placeholder: '请输入id'
      },
      {
        type: 'input',
        label: '用户名',
        placeholder: '请输入用户名'
      },
      {
        type: 'password',
        label: '密码',
        placeholder: '请输入密码'
      },
      {
        type: 'select',
        label: '喜欢的运动',
        placeholder: '请选择您喜欢的运动',
        options: [
          { title: '篮球', value: 'basketball' },
          { title: '足球', value: 'football' }
        ]
      },
      {
        type: 'datepicker',
        label: '创建时间',
        otherOptions: {
          startPlaceholder: '开始时间',
          endPlaceholder: '结束时间',
          type: 'daterange'
        }
      }
    ]

    const labelWidth = '120px'

    const itemStyle = {
      padding: '10px 40px'
    }

    // const colLayout = { span: 8 }

    const colLayout = {
      xl: 6, // > 1920的屏幕上一行显示 4个  4 * 6 = 24
      lg: 8, // > 1200的屏幕上一行显示 3个  3 * 8 = 24
      md: 12, // > 992的屏幕上一行显示 2个  2 * 12 = 24
      sm: 24, // > 768的屏幕上一行显示 1个  1 * 24 = 24
      xs: 24 // < 768的屏幕上一行显示 1个  1 * 24 = 24
    } */

    return {
      // formItems,
      // labelWidth,
      // itemStyle,
      // colLayout
      formConfig
    }
  }
})
</script>

<style scoped></style>

<template>
  <div class="hy-form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <!-- <el-col :span="8"> -->
          <el-col v-bind="colLayout">
            <el-form-item
              :label="item.label"
              :rules="item.rules"
              :style="itemStyle"
            >
              <!-- <el-input :placeholder="item.placeholder" /> -->
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <!-- <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  v-bind="item.otherOptions"
                  v-model="formData[`${item.field}`]"
                /> -->
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  v-bind="item.otherOptions"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                />
              </template>
              <template v-else-if="item.type === 'select'">
                <!-- <el-select
                  :placeholder="item.placeholder"
                  style="width: 100%"
                  v-model="formData[`${item.field}`]"
                > -->
                <el-select
                  :placeholder="item.placeholder"
                  style="width: 100%"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                >
                  <el-option
                    v-for="option in item.options"
                    :value="option.value"
                    :key="option.value"
                    v-bind="item.otherOptions"
                  >
                    {{ option.title }}
                  </el-option>
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <!-- <el-date-picker
                  v-bind="item.otherOptions"
                  style="width: 100%"
                  v-model="formData[`${item.field}`]"
                ></el-date-picker> -->
                <el-date-picker
                  v-bind="item.otherOptions"
                  style="width: 100%"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
// import { defineComponent, PropType, ref, watch } from 'vue'
import { defineComponent, PropType } from 'vue'
// import { defineComponent, PropType, watch, computed } from 'vue'

import type { IFormItem } from '../types'

export default defineComponent({
  props: {
    /* formData: {
      type: Object,
      required: true
    }, */
    modelValue: {
      type: Object,
      required: true
    },
    formItems: {
      type: Array as PropType<IFormItem[]>,
      default: () => []
    },
    labelWidth: {
      type: String,
      default: '100px'
    },
    itemStyle: {
      type: Object,
      default: () => ({ padding: '10px 40px' })
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6, // > 1920的屏幕上一行显示 4个  4 * 6 = 24
        lg: 8, // > 1200的屏幕上一行显示 3个  3 * 8 = 24
        md: 12, // > 992的屏幕上一行显示 2个  2 * 12 = 24
        sm: 24, // > 768的屏幕上一行显示 1个  1 * 24 = 24
        xs: 24 // < 768的屏幕上一行显示 1个  1 * 24 = 24
      })
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    /* const formData = computed({
      get: () => props.modelValue,
      set: (newValue) => {
        console.log('------------------------')
        emit('update:modelValue', newValue)
      }
    }) */
    // 改了modelValue数据，formData没有变化
    // const formData = ref({ ...props.modelValue })
    // const formData = computed(() => ({ ...props.modelValue }))
    /* const formData = computed({
      get: () => ({ ...props.modelValue }),
      set: (newValue) => {
        console.log(newValue)
      }
    }) */
    // const formData = ref({ ...props.modelValue })
    /* watch(props.modelValue, (newValue) => {
      console.log(newValue)
    }) */

    /* watch(
      () => props.modelValue,
      (newValue) => {
        // console.log(newValue)
        formData.value = { newValue }
      }
    ) */

    // 使用双向绑定
    /* const formData = ref({ ...props.modelValue })

    watch(
      formData,
      (newValue) => {
        console.log(newValue)
        emit('update:modelValue', newValue)
      },
      {
        deep: true
      }
    ) */

    // 不使用双向绑定
    // :model-value="modelValue[`${item.field}`]"
    // @update:modelValue="handleValueChange($event, item.field)"
    const handleValueChange = (value: any, field: string) => {
      emit('update:modelValue', { ...props.modelValue, [field]: value })
    }

    return {
      // formData
      handleValueChange
    }
  }
})
</script>

<style scoped lang="less">
.hy-form {
  padding-top: 22px;
  /* .form-item {
    padding: 5px 30px;
  } */
}
</style>

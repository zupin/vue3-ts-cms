<template>
  <div class="page-search">
    <!-- <hy-form
      :formItems="formItems"
      :labelWidth="labelWidth"
      :itemStyle="itemStyle"
      :colLayout="colLayout"
    /> -->
    <!-- <hy-form v-bind="searchFormConfig" :formData="formData" /> -->
    <!-- <hy-form v-bind="searchFormConfig" v-model="formData" /> -->
    <!-- <hy-form v-bind="searchFormConfig" :modelValue="formData" /> -->
    <hy-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button icon="el-icon-refresh" @click="handleResetClick">
            重置
          </el-button>
          <el-button
            type="primary"
            icon="el-icon-search"
            @click="handleQueryClick"
          >
            搜索
          </el-button>
        </div>
      </template>
    </hy-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HyForm from '@/base-ui/form'

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    HyForm
  },
  emits: ['resetBtnClick', 'queryBtnClick'],
  setup(props, { emit }) {
    // 双向绑定的属性应该是由配置文件中的field来决定
    // 1、优化一：formData中的属性应该动态来决定
    const formItems = props.searchFormConfig?.formItems ?? []
    const formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[item.field] = ''
    }

    /* const formData = ref({
      id: '',
      name: '',
      password: '',
      sport: '',
      createTime: ''
    }) */
    const formData = ref(formOriginData)

    // 2、优化二：当用户点击重置后
    const handleResetClick = () => {
      // console.log(formOriginData)
      formData.value = formOriginData
      // console.log(formData)
      /* for (const key in formOriginData) {
        formData.value[`${key}`] = formOriginData[key]
      } */
      emit('resetBtnClick')
    }

    // 3、优化三：当用户点击搜索
    const handleQueryClick = () => {
      // console.log('点击了搜索')
      emit('queryBtnClick', formData.value)
    }

    return {
      formData,
      handleResetClick,
      handleQueryClick
    }
  }
})
</script>

<style scoped lang="less">
.header {
  color: red;
  /* text-align: left; */
}
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>

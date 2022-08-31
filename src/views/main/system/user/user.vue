<template>
  <div class="user">
    <!-- <hy-form
      :formItems="formItems"
      :labelWidth="labelWidth"
      :itemStyle="itemStyle"
      :colLayout="colLayout"
    /> -->
    <!-- <hy-form v-bind="searchFormConfig" :formData="formData" /> -->
    <!-- <hy-form v-bind="searchFormConfig" v-model="formData" /> -->
    <!-- <hy-form v-bind="searchFormConfig" :modelValue="formData" /> -->
    <!-- <hy-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button icon="el-icon-refresh">重置</el-button>
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </div>
      </template>
    </hy-form> -->
    <page-search :searchFormConfig="searchFormConfig" />

    <!-- <el-table :data="userList" border style="width: 100%">
      <el-table-column prop="name" label="用户名" min-width="180" />
      <el-table-column prop="realname" label="真实姓名" width="180" />
      <el-table-column prop="cellphone" label="电话号码" />
    </el-table> -->
    <!-- <div class="content">
      <el-table :data="userList" border style="width: 100%">
        <template v-for="propItem in propList" :key="propItem.prop">
          <el-table-column v-bind="propItem" align="center" />
        </template>
      </el-table>
    </div> -->

    <!-- hy-table注释 -->
    <!-- <div class="content"> -->
    <!-- <hy-table
        :listData="userList"
        :propList="propList"
        :showIndexColumn="showIndexColumn"
        :showSelectColumn="showSelectColumn"
        @selectionChange="selectionChange"
        :title="title"
      > -->

    <!-- <hy-table
        :listData="userList"
        v-bind="contentTableConfig"
        @selectionChange="selectionChange"
      >
        <template #headerHandler>
          <el-button type="primary" size="medium">新建用户</el-button>
        </template>
        <template #status="scope">
          <el-button
            size="mini"
            plain
            :type="scope.row.enable ? 'success' : 'danger'"
          >
            {{ scope.row.enable ? '禁用' : '启用' }}
          </el-button>
        </template>
        <template #createAt="scope">
          <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
        </template>
        <template #updateAt="scope">
          <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
        </template>
        <template #handler>
          <div class="handler-btns">
            <el-button icon="el-icon-edit" size="mini" type="text">
              编辑
            </el-button>
            <el-button icon="el-icon-delete" size="mini" type="text">
              删除
            </el-button>
          </div>
        </template>
      </hy-table> -->
    <!-- </div> -->
    <!-- hy-table注释 -->
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="users"
    ></page-content>
  </div>
</template>

<script lang="ts">
// import { defineComponent, ref } from 'vue'
/* import { defineComponent, computed } from 'vue'
import { useStore } from '@/store' */
import { defineComponent } from 'vue'

// import HyForm, { IFormItem, IForm } from '@/base-ui/form'
// import HyForm from '@/base-ui/form'

import PageSearch from '@/components/page-search'
// import HyTable from '@/base-ui/table'
import PageContent from '@/components/page-content'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'

export default defineComponent({
  name: 'user',
  components: {
    // HyForm,
    PageSearch,
    // HyTable,
    PageContent
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
    /* const formData = ref({
      id: '',
      name: '',
      password: '',
      sport: '',
      createTime: ''
    }) */

    /* const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageUrl: '/users/list',
      queryInfo: {
        offset: 0,
        size: 10
      }
    })

    const userList = computed(() => store.state.system.userList) */
    // const userCount = computed(() => store.state.system.userCount)

    /* const selectionChange = (value: any) => {
      console.log(value)
    } */

    return {
      // formItems,
      // labelWidth,
      // itemStyle,
      // colLayout,
      searchFormConfig,
      // formData,
      // userList,
      // propList,
      // showIndexColumn,
      // showSelectColumn,
      // title
      // selectionChange,
      contentTableConfig
    }
  }
})
</script>

<style scoped lang="less">
/* .content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
} */
</style>

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
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    />

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
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="users"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    ></page-content>

    <!-- <div class="page-modal">
      <el-dialog v-model="dialogVisible" title="新建用户" width="30%" center>
        <hy-form v-bind="modalConfig" v-model="formData"></hy-form>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogVisible = false">取消</el-button>
            <el-button type="primary" @click="dialogVisible = false"
              >确定</el-button
            >
          </span>
        </template>
      </el-dialog>
    </div> -->
    <!-- <page-modal
      :defaultInfo="defaultInfo"
      ref="pageModelRef"
      :modalConfig="modalConfig"
    ></page-modal> -->
    <page-modal
      :defaultInfo="defaultInfo"
      ref="pageModelRef"
      :modalConfig="modalConfigRef"
      pageName="users"
    ></page-modal>
  </div>
</template>

<script lang="ts">
// import { defineComponent, ref } from 'vue'
/* import { defineComponent, computed } from 'vue'
import { useStore } from '@/store' */
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'

// import HyForm from '@/base-ui/form'

// import HyForm, { IFormItem, IForm } from '@/base-ui/form'
// import HyForm from '@/base-ui/form'

import PageSearch from '@/components/page-search'
// import HyTable from '@/base-ui/table'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'

import { usePageSearch } from '@/hooks/use-page-search'
import { usePageModal } from '@/hooks/use-page-modal'

export default defineComponent({
  name: 'user',
  components: {
    // HyForm,
    PageSearch,
    // HyTable,
    PageContent,
    // HyForm
    PageModal
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

    /* const pageContentRef = ref<InstanceType<typeof PageContent>>()
    const handleResetClick = () => {
      pageContentRef.value?.getPageData()
    }
    const handleQueryClick = (queryInfo: any) => {
      pageContentRef.value?.getPageData(queryInfo)
    } */

    // 抽取封装hooks
    const [pageContentRef, handleResetClick, handleQueryClick] =
      usePageSearch() as any

    /* const dialogVisible = ref(true)
    const formData = ref({}) */

    /* const pageModelRef = ref<InstanceType<typeof PageModal>>()
    const defaultInfo = ref({})

    const handleNewData = () => {
      if (pageModelRef.value) {
        pageModelRef.value.dialogVisible = true
      }
    }
    const handleEditData = (item: any) => {
      console.log(item)
      defaultInfo.value = { ...item }
      if (pageModelRef.value) {
        pageModelRef.value.dialogVisible = true
      }
    } */
    // pageModel相关逻辑
    // 1、处理密码的逻辑
    const newCallback = () => {
      const passwordItem = modalConfig.formItems.find(
        (item) => item.field === 'password'
      )
      passwordItem!.isHidden = false
    }
    const editCallback = () => {
      const passwordItem = modalConfig.formItems.find(
        (item) => item.field === 'password'
      )
      passwordItem!.isHidden = true
    }

    // 2、动态添加部门和角色列表
    const store = useStore()
    const modalConfigRef = computed(() => {
      const departmentItem = modalConfig.formItems.find(
        (item) => item.field === 'departmentId'
      )
      departmentItem!.options = store.state.entireDepartment.map((item) => {
        return { title: item.name, value: item.id }
      })

      const roleItem = modalConfig.formItems.find(
        (item) => item.field === 'roleId'
      )
      roleItem!.options = store.state.entireRole.map((item) => {
        return { title: item.name, value: item.id }
      })
      return modalConfig
    })

    // 存在问题：刷新后没数据，只能在其他页面刷新再跳转到用户页面才有数据（原因：entireDepartment和entireRole是异步请求数据）
    // 解决方式：加入响应式中去
    /* const departmentItem = modalConfig.formItems.find(
      (item) => item.field === 'departmentId'
    )
    // console.log(departmentItem) // {field: 'departmentId', type: 'select', label: '选择部门', placeholder: '请选择部门', options: Array(0)}
    departmentItem!.options = store.state.entireDepartment.map((item) => {
      return { title: item.name, value: item.id }
    })

    const roleItem = modalConfig.formItems.find(
      (item) => item.field === 'roleId'
    )
    roleItem!.options = store.state.entireRole.map((item) => {
      return { title: item.name, value: item.id }
    }) */

    // 3、调用hook获取公共变量和函数
    const [pageModelRef, defaultInfo, handleNewData, handleEditData] =
      usePageModal(newCallback, editCallback) as any

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
      contentTableConfig,
      pageContentRef,
      handleResetClick,
      handleQueryClick,
      // modalConfig,
      modalConfigRef,
      // dialogVisible,
      // formData,
      handleNewData,
      handleEditData,
      pageModelRef,
      defaultInfo
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

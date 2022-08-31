<template>
  <div class="page-content">
    <hy-table
      :listData="dataList"
      v-bind="contentTableConfig"
      @selectionChange="selectionChange"
    >
      <!-- 1、header中的插槽 -->
      <template #headerHandler>
        <el-button type="primary" size="medium">新建用户</el-button>
        <!-- <el-button icon="el-icon-refresh"></el-button> -->
      </template>

      <!-- 2、列中的插槽 -->
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
        <!-- <strong>{{ scope.row.createAt }}</strong> -->
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
    </hy-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import HyTable from '@/base-ui/table'

export default defineComponent({
  components: {
    HyTable
  },
  props: {
    contentTableConfig: {
      type: Object,
      require: true
    },
    pageName: {
      type: String,
      require: true
    }
  },
  setup(props) {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      // pageUrl: '/users/list',
      pageName: props.pageName,
      queryInfo: {
        offset: 0,
        size: 10
      }
    })

    // const userList = computed(() => store.state.system.userList)
    const dataList = computed(() =>
      store.getters[`system/pageListData`](props.pageName)
    )
    // const userCount = computed(() => store.state.system.userCount)

    const selectionChange = (value: any) => {
      console.log(value)
    }

    return {
      selectionChange,
      dataList
    }
  }
})
</script>

<style scoped>
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>

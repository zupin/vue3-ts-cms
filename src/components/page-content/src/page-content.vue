<template>
  <div class="page-content">
    <!-- modelValue -> update:modelValue -->
    <!-- page -> update:page -->
    <hy-table
      :listCount="dataCount"
      :listData="dataList"
      v-bind="contentTableConfig"
      @selectionChange="selectionChange"
      v-model:page="pageInfo"
    >
      <!-- 1、header中的插槽 -->
      <template #headerHandler>
        <el-button
          v-if="isCreate"
          type="primary"
          size="medium"
          @click="handleNewClick"
        >
          新建用户
        </el-button>
        <!-- <el-button icon="el-icon-refresh"></el-button> -->
      </template>

      <!-- 2、列中的插槽 -->
      <template #status="scope">
        <el-button
          size="mini"
          plain
          :type="scope.row.enable ?? scope.row.status ? 'success' : 'danger'"
        >
          {{ scope.row.enable ?? scope.row.status ? '禁用' : '启用' }}
        </el-button>
      </template>
      <template #createAt="scope">
        <!-- <strong>{{ scope.row.createAt }}</strong> -->
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #handler="scope">
        <div class="handler-btns">
          <el-button
            v-if="isUpdate"
            icon="el-icon-edit"
            size="mini"
            type="text"
            @click="handleEditClick(scope.row)"
          >
            编辑
          </el-button>
          <el-button
            v-if="isDelete"
            icon="el-icon-delete"
            size="mini"
            type="text"
            @click="handleDeleteClick(scope.row)"
          >
            删除
          </el-button>
        </div>
      </template>
      <!-- 应该放到goods.vue里面 -->
      <!-- <template #image="scope">
        <el-image
          style="width: 60px; height: 60px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
        />
      </template> -->
      <!-- 在page-content中动态插入剩余的插槽 -->
      <template
        v-for="item in otherPropSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </hy-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue'
import { useStore } from '@/store'

import { usePermission } from '@/hooks/use-permission'

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
  emits: ['newBtnClick', 'editBtnClick'],
  setup(props, { emit }) {
    const store = useStore()

    // 0、获取操作权限
    const isCreate = usePermission(props.pageName as string, 'create')
    const isUpdate = usePermission(props.pageName as string, 'update')
    const isDelete = usePermission(props.pageName as string, 'delete')
    const isQuery = usePermission(props.pageName as string, 'query')

    // 1、双向绑定pageInfo
    // const pageInfo = ref({ currentPage: 0, pageSize: 10 })
    const pageInfo = ref({ currentPage: 1, pageSize: 10 })
    watch(pageInfo, () => getPageData())

    // 2、发送网络请求
    /* store.dispatch('system/getPageListAction', {
      // pageUrl: '/users/list',
      pageName: props.pageName,
      queryInfo: {
        offset: 0,
        size: 10
      }
    }) */
    /* const getPageData = (queryInfo: any = {}) => {
      store.dispatch('system/getPageListAction', {
        pageName: props.pageName,
        queryInfo: {
          offset: 0,
          size: 10,
          ...queryInfo
        }
      })
    } */
    const getPageData = (queryInfo: any = {}) => {
      if (!isQuery) return
      store.dispatch('system/getPageListAction', {
        pageName: props.pageName,
        queryInfo: {
          // offset: pageInfo.value.currentPage * pageInfo.value.pageSize,
          offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...queryInfo
        }
      })
    }
    getPageData()

    // 3、从vuex中获取数据
    // const userList = computed(() => store.state.system.userList)
    const dataList = computed(() =>
      store.getters[`system/pageListData`](props.pageName)
    )
    const dataCount = computed(() =>
      store.getters[`system/pageListCount`](props.pageName)
    )

    const selectionChange = (value: any) => {
      console.log(value)
    }

    // 4、获取其他的动态插槽名称
    const otherPropSlots = props.contentTableConfig?.propList.filter(
      (item: any) => {
        if (item.slotName === 'status') return false
        if (item.slotName === 'createAt') return false
        if (item.slotName === 'updateAt') return false
        if (item.slotName === 'handler') return false
        return true
      }
    )

    // 5、删除/编辑/新建操作
    const handleDeleteClick = (item: any) => {
      // console.log(item) // Proxy{id: 177033156, name: 'james', realname: '詹姆斯', cellphone: 13322223338, enable: 1,…}
      store.dispatch('system/deletePageDataAction', {
        pageName: props.pageName,
        id: item.id
      })
    }

    const handleNewClick = () => {
      emit('newBtnClick')
    }

    const handleEditClick = (item: any) => {
      emit('editBtnClick', item)
    }

    return {
      selectionChange,
      dataList,
      getPageData,
      dataCount,
      pageInfo,
      otherPropSlots,
      isCreate,
      isUpdate,
      isDelete,
      handleDeleteClick,
      handleNewClick,
      handleEditClick
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

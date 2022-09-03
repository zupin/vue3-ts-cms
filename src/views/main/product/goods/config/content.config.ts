export const contentTableConfig = {
  title: '商品列表',
  // ElTable配置
  propList: [
    { prop: 'name', label: '商品名称', minWidth: '80' },
    /* { prop: 'oldPrice', label: '原价格', minWidth: '60', slotName: 'oldPrice' },
    { prop: 'newPrice', label: '现价格', minWidth: '60', slotName: 'newPrice' }, */
    { prop: 'oldPrice', label: '原价格', minWidth: '60', slotName: 'price' },
    { prop: 'newPrice', label: '现价格', minWidth: '60', slotName: 'price' },
    { prop: 'imgUrl', label: '商品图片', minWidth: '80', slotName: 'image' },
    { prop: 'inventoryCount', label: '库存数量', minWidth: '60' },
    { prop: 'saleCount', label: '销售数量', minWidth: '60' },
    { prop: 'favorCount', label: '喜欢数量', minWidth: '60' },
    { prop: 'address', label: '发货地址', minWidth: '60' },
    {
      prop: 'status',
      label: '状态',
      minWidth: '100',
      slotName: 'status'
    },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '150',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '150',
      slotName: 'updateAt'
    },
    {
      label: '操作',
      minWidth: '120',
      slotName: 'handler'
    }
  ],
  // 显示索引列
  showIndexColumn: true,
  // 显示是否勾选
  showSelectColumn: true
}

// 编写好规则
export const rules = {
  // name: [{规则1}, {规则2}, {规则3}]
  name: [
    {
      required: true,
      message: '用户名是必传内容~', // 不符合规则会显示的内容
      trigger: 'blur' // 一般有两种方式 blur：失去焦点时触发， change：内容发生改变就触发
    },
    {
      pattern: /^[a-z0-9]{5,10}$/, // 由小写字母和数字 5-10 组成
      message: '用户名必须是5~10位字母和数字',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码是必传内容~', // 不符合规则会显示的内容
      trigger: 'blur' // 一般有两种方式 blur：失去焦点时触发， change：内容发生改变就触发
    },
    {
      pattern: /^[a-z0-9]{3,}$/, // 由小写字母和数字 3位以上 组成
      message: '密码必须是3位以上的字母和数字',
      trigger: 'blur'
    }
  ]
}

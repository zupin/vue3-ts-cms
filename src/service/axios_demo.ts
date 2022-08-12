// console.log('-----------')
import axios from 'axios'

// axios的实例对象
/* axios.request({
  method: 'GET'
}) */
// 1、模拟get请求
axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
  console.log(res.data)
})
// 2、get请求并传入参数
/* axios
  .get('http://httpbin.org/get', {
    params: {
      name: 'coderwhy',
      age: 18
    }
  })
  .then((res) => {
    console.log(res.data)
  })
// 3、post请求
axios
  .post('http://httpbin.org/post', {
    data: {
      name: 'why',
      age: 18
    }
  })
  .then((res) => {
    console.log(res.data)
  }) */

// 额外补充的Promise中类型的使用
// Promise 本身是可以有类型的
/* new Promise<string>((resolve, reject) => {
  resolve('1234')
}).then((res) => {
  console.log(res.length)
}) */

// 4、axios的配置选项
// 4.1 全局配置
axios.defaults.baseURL = 'https://httpbin.org'
axios.defaults.timeout = 10000
// axios.defaults.headers = {}

// 4.2 每个请求单独的配置
/* axios
  .get('/get', {
    params: {
      name: 'coderwhy',
      age: 18
    },
    timeout: 5000,
    headers: {}
  })
  .then((res) => {
    console.log(res.data)
  })

axios
  .post('/post', {
    data: {
      name: 'why',
      age: 18
    }
  })
  .then((res) => {
    console.log(res.data)
  }) */

// axios.all() -> 多个请求，一起返回
axios
  .all([
    axios.get('/get', { params: { name: 'why', age: 18 } }),
    axios.get('/post', { data: { name: 'why', age: 18 } })
  ])
  .then((res) => {
    console.log(res)
    console.log(res[0].data)
    console.log(res[1].data)
  })

// 6、axios拦截器
// fn1：请求发送成功时会执行的函数
// fn2：请求发送失败时会执行的函数
// axios.interceptors.request.use(f1, f2)
axios.interceptors.request.use(
  (config) => {
    // 想做的一些操作
    // 1、给请求添加token
    // 2、isLoading的动画
    console.log('请求成功的拦截')
    return config
  },
  (err) => {
    console.log('请求发送错误~')
    return err
  }
)
// fn1: 数据响应成功（服务器正常地返回了数据 20x）
// axios.interceptors.response.use(f1, f2)
axios.interceptors.response.use(
  (res) => {
    console.log('响应成功的拦截')
    return res
  },
  (err) => {
    console.log('服务器响应失败')
    return err
  }
)

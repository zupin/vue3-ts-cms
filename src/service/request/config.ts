// 1、方式一：手动的切换不同的环境（不推荐）
// const BASE_URL = 'http://coderwhy.org/dev'
// const BASE_NAME = 'coderwhy'

/* const BASE_URL = 'http://coderwhy.org/prod'
const BASE_NAME = 'kobe'

const BASE_URL = 'http://coderwhy.org/test'
const BASE_NAME = 'james' */

// 2、方式二：根据 process.env.NODE_ENV 区分
// 开发环境下：development
// 生产环境下：production
// 测试环境下：test
let BASE_URL = ''
// let BASE_NAME = ''
const TIME_OUT = 10000

// DefinePlugin
if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://123.207.32.32:8000/'
  // BASE_NAME = 'coderwhy'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://coderwhy.org/prod'
  // BASE_NAME = 'kobe'
} else {
  BASE_URL = 'http://coderwhy.org/test'
  // BASE_NAME = 'james'
}

export { BASE_URL, TIME_OUT }

// 方式三：创建 .env 文件

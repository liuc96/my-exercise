
const router = require('koa-router')()
const url = require('url')

// 配置中间件 获取url的地址
router.use(async (ctx, next) => {
  var pathname = url.parse(ctx.request.url).pathname

  // 模板引擎配置全局的变量
  ctx.state.pathname = pathname
  await next()
})

const imageLayout = require('./demo/image-layout.js')

router.use('/image-layout', imageLayout)

module.exports = router.routes()

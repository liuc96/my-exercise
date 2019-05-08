
const router = require('koa-router')()
const url = require('url')

// 配置中间件 获取url的地址
router.use(async (ctx, next) => {
  var pathname = url.parse(ctx.request.url).pathname

  // 模板引擎配置全局的变量
  ctx.state.pathname = pathname
  await next()
})

router.get('/', async (ctx) => {
  ctx.render('index/index', {
  })
})

module.exports = router.routes()

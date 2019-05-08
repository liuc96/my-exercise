const router = require('koa-router')()

router.get('/', async (ctx) => {
  await ctx.render('demo/image-layout/index')
})

module.exports = router.routes()

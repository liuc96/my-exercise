const router = require('koa-router')()

router.get('/', async (ctx) => {
  await ctx.render('demo/canvas/index')
})

module.exports = router.routes()

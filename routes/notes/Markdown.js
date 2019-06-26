const router = require('koa-router')()

router.get('/', async (ctx) => {
  await ctx.render('notes/Markdown/index')
})

module.exports = router.routes()

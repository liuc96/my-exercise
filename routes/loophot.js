
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
  // ctx.body="前台首页";

  ctx.render('loophot/index', {
  })
})

router.get('/news', async (ctx) => {
  var page = ctx.query.page || 1
  var pid = ctx.query.pid

  var pageSize = 3

  ctx.state.setting.site_title = 'xxx新闻页面'
  ctx.state.setting.site_keywords = 'xxx新闻页面'
  ctx.state.setting.site_description = 'xxx新闻页面'

  // 获取分类
  var cateResult = await DB.find('articlecate', { 'pid': '5afa56bb416f21368039b05d' })

  if (pid) {
    var articleResult = await DB.find('article', { 'pid': pid }, {}, {

      pageSize,
      page
    })
    var articleNum = await DB.count('article', { 'pid': pid })
  } else {
    // 获取所有子分类的id
    var subCateArr = []
    for (var i = 0; i < cateResult.length; i++) {
      subCateArr.push(cateResult[i]._id.toString())
    }
    var articleResult = await DB.find('article', { 'pid': { $in: subCateArr } }, {}, {
      pageSize,
      page
    })

    var articleNum = await DB.count('article', { 'pid': { $in: subCateArr } })
  }

  ctx.render('default/news', {

    catelist: cateResult,
    newslist: articleResult,
    pid: pid,
    page: page,
    totalPages: Math.ceil(articleNum / pageSize)

  })
})

router.get('/service', async (ctx) => {
  ctx.state.setting.site_title = 'xxx新闻页面'
  ctx.state.setting.site_keywords = 'xxx新闻页面'
  ctx.state.setting.site_description = 'xxx新闻页面'

  // 查询
  var serviceList = await DB.find('article', { 'pid': '5ab34b61c1348e1148e9b8c2' })
  ctx.render('default/service', {
    serviceList: serviceList
  })
})

module.exports = router.routes()

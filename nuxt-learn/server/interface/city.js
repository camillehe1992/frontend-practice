import Router from 'koa-router'

const router = new Router({
  prefix: '/city'
})

router.get('/list', async (ctx) => {
  ctx.body = {
    list: [
      'Beijing',
      'Tianjin'
    ]
  }
})

export default router
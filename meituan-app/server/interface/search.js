import Router from 'koa-router';
import axios from './utils/axios'
import conf from '../conf';

let router = new Router({ prefix: '/search' })

router.get('/top', async (ctx, next) => {
  if (conf.localDataSource) {
    
  } else {
    let { status, data: { top }} = await axios.get(`${conf.remoteServer}/search/top`, {
      params: {
        input: ctx.query.input,
        city: ctx.query.city
      }
    })
    ctx.body = {
      top: status === 200 ? top : []
    }
  }
})

router.get('/hotPlace', async (ctx, next) => {
  if (conf.localDataSource) {
    
  } else {
    let city = ctx.store ? ctx.store.geo.position.city : ctx.query.city
    let { status, data: { result }} = await axios.get(`${conf.remoteServer}/search/hotPlace`, {
      params: {
        city
      }
    })
    ctx.body = {
      result: status === 200 ? result : []
    }
  }
})

router.get('/resultsByKeywords', async (ctx) => {
  const {city, keyword} = ctx.query;
  let {
    status,
    data: {
      count,
      pois
    }
  } = await axios.get('http://cp-tools.cn/search/resultsByKeywords', {
    params: {
      city,
      keyword,
      sign
    }
  })
  ctx.body = {
    count: status === 200 ? count : 0,
    pois: status === 200
      ? pois
      : []
  }
})

export default router
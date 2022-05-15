import Router from 'koa-router';
import axios from './utils/axios'
import conf from '../conf';

import Province from '../dbs/models/province';
import Menu from '../dbs/models/menu';
import City from '../dbs/models/city';

let router = new Router({ prefix: '/geo' })

router.get('/getPosition', async (ctx, next) => {
  let { status, data: { province, city } } = await axios.get(`${conf.remoteServer}/geo/getPosition`)
  ctx.body = (status === 200) ? { province, city } : { province: '', city: '' }
})

router.get('/menu', async (ctx, next) => {
  if (conf.localDataSource) {
    let menu = await Menu.find()
    ctx.body = { menu: menu[0].menu }
  } else {
    let { status, data: { menu } } = await axios.get(`${conf.remoteServer}/geo/menu`)
    ctx.body = { menu: (status === 200) ? menu : [] }
  }
})

router.get('/province', async (ctx, next) => {
  if (conf.localDataSource) {
    let province = await Province.find()
    ctx.body = {
      province: province.map(item => {
        return { id: item.id, name: item.value }
      })
    }
  } else {
    let { status, data: { province } } = await axios.get(`${conf.remoteServer}/geo/province`)
    ctx.body = { province: (status === 200) ? province : [] }
  }
})

router.get('/province/:id', async (ctx, next) => {
  if (conf.localDataSource) {
    let city = await City.findOne({ id: ctx.params.id })
    ctx.body = {
      code: 0, city: city.value.map(item => {
        return { province: item.province, id: item.id, name: item.name }
      })
    }
  } else {
    let { status, data: { code, city } } = await axios.get(`${conf.remoteServer}/geo/province/${ctx.params.id}`)
    ctx.body = (status === 200) ? { code, city } : { code: -1, city: [] }
  }
})

router.get('/city', async (ctx, next) => {
  if (conf.localDataSource) {
    let city = []
    let result = await City.find()
    result.forEach(item => {
      city = city.concat(item.value)
    });
    ctx.body = {
      code: 0,
      city: city.map(item => {
        return {
          province: item.province,
          id: item.id,
          name: item.name === '直辖市' || item.name === '省直辖县级行政区划'
            ? item.province
            : item.name
        }
      })
    }
  } else {
    let { status, data: { code, city } } = await axios.get(`${conf.remoteServer}/geo/city`)
    ctx.body = (status === 200) ? { code, city } : { code: -1, city: [] }
  }
})

router.get('/hotCity', async (ctx) => {
  if (conf.localDataSource) {
    let list = [
      '北京市',
      '上海市',
      '广州市',
      '深圳市',
      '天津市',
      '西安市',
      '杭州市',
      '南京市',
      '武汉市',
      '成都市'
    ]
    let result = await City.find()
    let nList = []
    result.forEach(item => {
      nList = nList.concat(item.value.filter(k => list.includes(k.name) || list.includes(k.province)))
    })
    ctx.body = {
      hots: nList
    }
  } else {
    let { status, data: {
      hots
    } } = await axios.get(`${conf.remoteServer}/geo/hotCity`);
    if (status === 200) {
      ctx.body = {
        hots
      }
    } else {
      ctx.body = {
        hots: []
      }
    }
  }
})

export default router
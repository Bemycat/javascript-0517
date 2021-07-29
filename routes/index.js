const router = require('koa-router')();
const fs = require('fs');
const axios = require('axios');

const jsdom = require('jsdom');
const {
  JSDOM
} = jsdom;
const {
  document
} = (new JSDOM('<!doctype html><html><body></body></html>')).window;
global.document = document;
const window = document.defaultView;
const $ = require('jquery')(window);

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
});
/* 首页 潮流女装、品牌男装、电脑办公 手机数码数据 */
router.get('/string', async (ctx, next) => {
  var response = await axios.get('http://vueshop.glbuys.com/api/home/index/nav?token=1ec949a15fb709370f');
  var sid = response.data.data.map((v, i) => {
    return v
  })
  ctx.body = {
    errcode: 0,
    errmsg: 'ok',
    sid
  }
});

/* 首页 潮流女装、品牌男装、电脑办公 总数据 */
router.get('/string2', async (ctx, next) => {
  var response = await axios.get('http://vueshop.glbuys.com/api/home/index/goodsLevel?token=1ec949a15fb709370f')
  var list = response.data;
  ctx.body = {
    errcode: 0,
    errmsg: 'ok',
    list,
  }
});

/* 首页为你推荐数据 */
router.get('/list3', async (ctx, next) => {
  var responsed = await axios.get('http://vueshop.glbuys.com/api/home/index/recom?token=1ec949a15fb709370f');
  var idf = responsed.data.data.map((v, i) => {
    return v

  });
  ctx.body = {
    errcode: 0,
    errmsg: 'ok',
    idf
  }
});

/* 轮播图数据 */
router.get('/cmap', async (ctx, next) => {
  var responsed = await axios.get('http://vueshop.glbuys.com/api/home/index/slide?token=1ec949a15fb709370f');
  var idf = responsed.data.data.map((v, i) => {
    return v
  });
  ctx.body = {
    errcode: 0,
    errmsg: 'ok',
    idf
  }
});

/* 搜索页左侧数据 */
router.get('/list5', async (ctx, next) => {
  var responsed = await axios.get('http://vueshop.glbuys.com/api/home/category/menu?token=1ec949a15fb709370f');
  var idnb = responsed.data.data.map((v, i) => {
    return v
  });

  ctx.body = {
    errcode: 0,
    errmsg: 'ok',
    idnb
  }
});

/* 搜索右侧数据 */
router.get('/list8', async (ctx, next) => {
  var responsed = await axios.get('http://vueshop.glbuys.com/api/home/category/show?cid=493&token=1ec949a15fb709370f');
  var list2 = responsed.data;
  ctx.body = {
    errcode: 0,
    errmsg: 'ok',
    list2,
  }
});

/* 品牌与选购热点数据 */
router.get('/list9', async (ctx, next) => {
  var responsed = await axios.get('http://vueshop.glbuys.com/api/home/goods/param?kwords=%E8%BF%9E%E8%A1%A3%E8%A3%99&token=1ec949a15fb709370f');
  var list3 = responsed.data.param;
  ctx.body = {
    errcode: 0,
    errmsg: 'ok',
    list3,
  }
});

/* 搜索页电脑办公数据 */
router.get('/list10', async (ctx, next) => {
  var responsed = await axios.get('http://vueshop.glbuys.com/api/home/category/show?cid=494&token=1ec949a15fb709370f');
  var list4 = responsed.data;
  ctx.body = {
    errcode: 0,
    errmsg: 'ok',
    list4,
  }
});


/* 搜索页摄影、手机数据*/
router.get('/list11', async (ctx, next) => {
  var responsed = await axios.get('http://vueshop.glbuys.com/api/home/category/show?cid=495&token=1ec949a15fb709370f');
  var list5 = responsed.data;
  ctx.body = {
    errcode: 0,
    errmsg: 'ok',
    list5,
  }
});

/* 验证码图片数据 */
router.get('/listpdd', async (ctx, next) => {
  var responsed = await axios.get('http://vueshop.glbuys.com/api/vcode/chkcode?token=1ec949a15fb709370f');
  var list100 = responsed.data;
  ctx.body = {
    errcode: 0,
    errmsg: 'ok',
    list100,
  }
});

module.exports = router
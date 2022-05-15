<template>
  <div class="m-nav">
    <ul class="nav">
      <li class="list">
        <nuxt-link to="/my">
          我的美团
        </nuxt-link>
        <dl>
          <dd>
            <nuxt-link to="/my">
              我的美团
            </nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/my">
              我的订单
            </nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/my">
              抵用券
            </nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/my">
              账户设置
            </nuxt-link>
          </dd>
        </dl>
      </li>
      <li>
        <nuxt-link to="/order">
          手机APP
        </nuxt-link>
      </li>
      <li class="list bd">
        <nuxt-link to="/center">
          商家中心
        </nuxt-link>
        <dl>
          <dd>
            <nuxt-link to="/my">
              美团餐饮商户中心
            </nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/my">
              登录商家中心
            </nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/my">
              美团智能收银
            </nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/my">
              我想合作
            </nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/my">
              手机免费开店
            </nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/my">
              餐饮代理商招募
            </nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/my">
              商家申请开票
            </nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/my">
              免费合作美团排队
            </nuxt-link>
          </dd>
        </dl>
      </li>
      <li class="list bd">
        <nuxt-link to="/center">
          美团规则
        </nuxt-link>
        <dl>
          <dd>
            <nuxt-link to="/my">
              规则中心
            </nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/my">
              规则目录
            </nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/my">
              规则评议院
            </nuxt-link>
          </dd>
        </dl>
      </li>
      <li class="list site">
        <nuxt-link to="/site">
          网站导航
        </nuxt-link>
        <div class="subContainer">
          <dl class="hotel">
            <dt>酒店旅游</dt>
            <dd>国际机票</dd>
          </dl>
          <dl class="food">
            <dt>吃美食</dt>
            <dd>烤鱼</dd>
          </dl>
          <dl class="movie">
            <dt>看电影</dt>
            <dd>热映电影</dd>
          </dl>
          <dl class="app">
            <dt>手机应用</dt>
            <dd>
              <a href="#">
                <img
                  src="//s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png"
                  title="meituan-app"
                  alt="meituan-app"
                >
              </a>
            </dd>
            <dd>
              <a href="#">
                <img
                  src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png"
                  title="takeout-app"
                  alt="takeout-app"
                >
              </a>
            </dd>
            <dd>
              <a href="#">
                <img
                  src="https://p0.meituan.net/travelcube/162c3308d9622f6d9cfaa49e60be4dca8573.png"
                  title="apartment-app"
                  alt="apartment-app"
                >
              </a>
            </dd>
            <dd>
              <a href="#">
                <img
                  src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png"
                  title="dianping-app"
                  alt="dianping-app"
                >
              </a>
            </dd>
            <dd>
              <a href="#">
                <img
                  src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png"
                  title="movie-app"
                  alt="movie-app"
                >
              </a>
            </dd>
          </dl>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {

  }
</script>
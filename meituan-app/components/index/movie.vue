<template>
  <section class="m-section">
    <dl>
      <dt>{{ title }}</dt>
      <dd
        v-for="item in navlist"
        :key="item.id"
      >
        {{ item.label }}
      </dd>
      <dd>全部</dd>
    </dl>
    <div class="slider">
      <el-carousel
        class="slider-content clearfix"
        trigger="click"
        height="300px"
        :autoplay="false"
      >
        <el-carousel-item
          v-for="item in 2"
          :key="item"
        >
          <div
            v-for="film in comingfilms.filter(i => i.pagination === item)"
            :key="film.id"
            class="slider-film-item"
          >
            <nuxt-link to="/">
              <img
                class="film-image"
                :src="film.img"
                alt=""
              >
              <div class="film-info">
                <p class="film-score">
                  <b><span>{{ film.store }}</span>人想看</b>
                </p>
                <p class="film-name">
                  {{ film.name }}
                </p>
              </div>
            </nuxt-link>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        title: '猫眼电影',
        navlist: [
          { navigation: 'coming-film', label: '即将上映' }
        ],
        comingfilms: [
          { name: '82号凶宅', store: 1000, pagination: 1, img: '//p0.meituan.net/movie/1907a5af889e44236fd80952980d36e13257090.jpg@214w_297h_1e_1c' },
          { name: '82号凶宅', store: 1000, pagination: 1, img: '//p0.meituan.net/movie/1907a5af889e44236fd80952980d36e13257090.jpg@214w_297h_1e_1c' },
          { name: '82号凶宅', store: 1000, pagination: 1, img: '//p0.meituan.net/movie/1907a5af889e44236fd80952980d36e13257090.jpg@214w_297h_1e_1c' },
          { name: '82号凶宅', store: 1000, pagination: 1, img: '//p0.meituan.net/movie/1907a5af889e44236fd80952980d36e13257090.jpg@214w_297h_1e_1c' },
          { name: '82号凶宅', store: 1000, pagination: 1, img: '//p0.meituan.net/movie/1907a5af889e44236fd80952980d36e13257090.jpg@214w_297h_1e_1c' },
          { name: '82号凶宅', store: 1000, pagination: 2, img: '//p0.meituan.net/movie/1907a5af889e44236fd80952980d36e13257090.jpg@214w_297h_1e_1c' },
          { name: '82号凶宅', store: 1000, pagination: 2, img: '//p0.meituan.net/movie/1907a5af889e44236fd80952980d36e13257090.jpg@214w_297h_1e_1c' },
          { name: '82号凶宅', store: 1000, pagination: 2, img: '//p0.meituan.net/movie/1907a5af889e44236fd80952980d36e13257090.jpg@214w_297h_1e_1c' },
          { name: '82号凶宅', store: 1000, pagination: 2, img: '//p0.meituan.net/movie/1907a5af889e44236fd80952980d36e13257090.jpg@214w_297h_1e_1c' },
          { name: '82号凶宅', store: 1000, pagination: 2, img: '//p0.meituan.net/movie/1907a5af889e44236fd80952980d36e13257090.jpg@214w_297h_1e_1c' }
        ]
      }
    },
  }
</script>
<style lang="scss" ;>

</style>
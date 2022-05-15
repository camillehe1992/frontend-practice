<template>
  <section class="m-section">
    <dl>
      <dt>{{ title }}</dt>
      <dd
        v-for="item in list"
        :key="item.kind"
      >
        {{ item.city }}
      </dd>
      <dd>全部</dd>
    </dl>
    <ul class="ibody">
      <li
        v-for="product in cur"
        :key="product.title"
      >
        <el-card
          :body-style="{ padding: '0px' }"
          shadow="never"
        >
          <img
            :src="product.img"
            alt=""
            class="image"
          >
          <!-- <img src="null@200w_200h_1e_1c" alt="" class="head-img"> -->
          <ul class="cbody">
            <li class="title">
              {{ product.title }}
            </li>
            <li class="pos">
              <span>{{ product.subtitle }}</span>
            </li>
            <li class="price">
              ￥<em>{{ product.price }}</em><span>/起</span>
            </li>
          </ul>
        </el-card>
      </li>
    </ul>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        title: '推荐民宿',
        // navlist: ["天津", "济南", "大连", "太原", "石家庄", "秦皇岛", "呼和浩特", "潍坊", "唐山", "泰安"],
        list: [
          {
            city: '天津',
            kind: 'tianjin',
            products: [
              {
                title: '民宿1',
                subtitle: '民宿介绍',
                price: 100,
                img: 'http://p1.meituan.net/iphoenix/4a1f9ceb038a3afab6f85d3de10eb53a1211762.jpg@740w_416h_1e_1c'
              },
              {
                title: '民宿2',
                subtitle: '民宿介绍',
                price: 100,
                img: 'http://p1.meituan.net/iphoenix/4a1f9ceb038a3afab6f85d3de10eb53a1211762.jpg@740w_416h_1e_1c'
              },
              {
                title: '民宿3',
                subtitle: '民宿介绍',
                price: 100,
                img: 'http://p1.meituan.net/iphoenix/4a1f9ceb038a3afab6f85d3de10eb53a1211762.jpg@740w_416h_1e_1c'
              },
              {
                title: '民宿4',
                subtitle: '民宿介绍',
                price: 100,
                img: 'http://p1.meituan.net/iphoenix/4a1f9ceb038a3afab6f85d3de10eb53a1211762.jpg@740w_416h_1e_1c'
              },
              {
                title: '民宿5',
                subtitle: '民宿介绍',
                price: 100,
                img: 'http://p1.meituan.net/iphoenix/4a1f9ceb038a3afab6f85d3de10eb53a1211762.jpg@740w_416h_1e_1c'
              },
              {
                title: '民宿6',
                subtitle: '民宿介绍',
                price: 100,
                img: 'http://p1.meituan.net/iphoenix/4a1f9ceb038a3afab6f85d3de10eb53a1211762.jpg@740w_416h_1e_1c'
              }
            ]
          },
          {
            city: '济南',
            kind: 'jinan',
            products: []
          }
        ]
      }
    },
    computed: {
      cur() {
        return this.list[0].products
      }
    },
  }
</script>
<style lang="scss" ;>

</style>
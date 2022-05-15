<template>
  <nav class="m-navigation">
    <div class="nav-title">
      {{ title }}
    </div>
    <dl class="nav-content">
      <div
        v-for="item in list"
        :key="item.title"
        class="nav-item"
      >
        <dt class="item-subtitle">
          {{ item.subtitle }}
        </dt>
        <div class="item-list">
          <dd
            v-for="i in item.items"
            :key="i.id"
            class="item"
          >
            {{ i }}
          </dd>
        </div>
      </div>
    </dl>
  </nav>
</template>
<script>
  export default {
    data() {
      return {
        title: '美团导航',
        list: [
          { subtitle: '热门城市', items: ["西安", "贵阳", "广州", "无锡", "上海", "宁波", "长沙", "温州", "深圳", "郑州", "南京", "苏州", "石家庄", "合肥", "杭州", "北京", "厦门", "成都", "大连", "昆明"] },
          { subtitle: '热门城市', items: ["西安", "贵阳", "广州", "无锡", "上海", "宁波", "长沙", "温州", "深圳", "郑州", "南京", "苏州", "石家庄", "合肥", "杭州", "北京", "厦门", "成都", "大连", "昆明"] },
          { subtitle: '热门城市', items: ["西安", "贵阳", "广州", "无锡", "上海", "宁波", "长沙", "温州", "深圳", "郑州", "南京", "苏州", "石家庄", "合肥", "杭州", "北京", "厦门", "成都", "大连", "昆明"] }
        ]
      }
    },
  }
</script>
<style lang="scss" ;>

</style>
<template>
  <div class="m-products-list">
    <dl>
      <dd
        v-for="item in nav"
        :key="item.name"
        :class="[item.name,item.acitve?'s-nav-active':'']"
        @click="navSelect"
      >
        {{ item.txt }}
      </dd>
    </dl>
    <ul>
      <Item
        v-for="(item,idx) in list"
        :key="idx"
        :meta="item"
      />
    </ul>
  </div>
</template>

<script>
import Item from "./product.vue";
export default {
  components: {
    Item
  },
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  async asyncData({ app }) {
    let { data } = await app.$axios.get("searchList");
    return { items: data.list };
  },
  data() {
    return {
      nav: [
        {
          name: "s-default",
          txt: "智能排序",
          acitve: true
        },
        {
          name: "s-price",
          txt: "价格最低",
          active: false
        },
        {
          name: "s-visit",
          txt: "人气最高",
          active: false
        },
        {
          name: "s-comment",
          txt: "评价最高",
          active: false
        }
      ]
    };
  },
  methods: {
    navSelect: function() {
      console.log("select");
    }
  }
};
</script>

<template>
  <div class="m-menu">
    <dl
      class="nav"
      @mouseleave="mouseleave"
    >
      <dt>全部分类</dt>
      <dd
        v-for="item in $store.state.home.menu"
        :key="item.id"
        @mouseenter="mouseenter"
      >
        <i :class="item.type" />
        {{ item.name }}
        <span class="arrow" />
      </dd>
    </dl>
    <div
      v-if="kind"
      class="detail"
      @mouseenter="detailenter"
      @mouseleave="detailleave"
    >
      <template v-for="item in curdetail.child">
        <h4 :key="item.id">
          {{ item.title }}
        </h4>
        <span
          v-for="v in item.child"
          :key="v"
        >
          {{ v }}
        </span>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        kind: ''
      }
    },
    computed: {
      curdetail() {
        return this.$store.state.home.menu.filter(item => item.type === this.kind)[0]
      }
    },
    methods: {
      mouseleave() {
        let self = this
        self._timer = setTimeout(() => {
          self.kind = ''
        }, 150);
      },
      mouseenter(e) {
        this.kind = e.target.querySelector('i').className
      },
      detailleave() {
        this.kind = ''
      },
      detailenter() {
        clearTimeout(this._timer)
      }
    },
  }
</script>

<style lang="scss">
</style>
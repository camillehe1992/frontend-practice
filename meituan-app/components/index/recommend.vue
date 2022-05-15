<template>
  <section class="m-section">
    <dl>
      <dt>{{ title }}</dt>
      <dd
        v-for="item in navlist"
        :key="item.id"
      >
        {{ item }}
      </dd>
      <dd>全部</dd>
    </dl>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        title: '猜您喜欢',
        navlist: ['为你甄选最合适的']
      }
    },
  }
</script>
<style lang="scss" ;>

</style>
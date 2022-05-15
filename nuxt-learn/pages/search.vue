<template>
  <section class="page">
    search page
    <ul>
      <li v-for="item in $store.state.city.list" :key="item.id">
        {{ item }}
      </li>
    </ul>
  </section>
</template>
<script>
  import axios from 'axios'
  export default {
    layout: 'search',
    data() {
      return {
        list: []
      }
    },
    async asyncData () {
      let { status, data: {list}} = await axios.get('http://localhost:3000/city/list')
      if (status == '200') {
        return {
          list
        }
      }
    }
  }
</script>
<style lang="css">
</style>
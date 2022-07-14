<template>
  <div>Counter: {{ num }}</div>
  <button type="submit" @click="add">+</button>
  <button type="submit" @click="minus">-</button>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState(['counter']),
    num() {
      return this.counter.count
    }
  },
  methods: {
    ...mapActions(["increment", "decrement"]),
    add() {
      this.increment();
    },
    minus() {
      this.decrement();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
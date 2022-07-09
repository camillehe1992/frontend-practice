<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
const dialogVisible = ref(false);
</script>

<template>
  <h1>{{ msg }}</h1>
  <button @click="dialogVisible = true">Click</button>
  <teleport to="body">
    <div class="dialog" v-if="dialogVisible"></div>
  </teleport>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>

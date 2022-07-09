<script setup>
import { onMounted, ref } from "vue";

defineProps({
  msg: String,
});

const title = ref("title");

onMounted(() => {
  console.log("onMounted 1");
  title.value = "title 1";
});

onMounted(() => {
  console.log("onMounted 2");
  title.value = "title 2";
});
</script>

<template>
  <h1>{{ msg }}</h1>
  <p>title: {{ title }}</p>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
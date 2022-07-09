<template>
  <base-layout>
    <suspense>
      <template #header>
        <h1>Here might be a page title</h1>
      </template>

      <template #default>
        <todo-list></todo-list>
      </template>

      <template #fallback>
        <p>loading...</p>
      </template>

      <template #footer>
        <p>Here's some contact info</p>
      </template>
    </suspense>
  </base-layout>
</template>

<script>
import TodoList from "./TodoList.vue";
import BaseLayout from "./BaseLayout.vue";

export default {
  components: { TodoList, BaseLayout },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>
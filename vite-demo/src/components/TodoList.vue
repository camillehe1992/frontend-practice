<template>
  <ul>
    <li v-for="todo in todos">{{ todo.title }}</li>
  </ul>
</template>

<script>
import wait from "../utils/wait";
export default {
  async setup() {
    await wait(2000);
    return {
      todos: [
        { title: "task1", status: "done" },
        { title: "task2", status: "todo" },
        { title: "task3", status: "in progress" },
        { title: "task4", status: "done" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
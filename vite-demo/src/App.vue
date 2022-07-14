<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from "./components/HelloWorld.vue";
import CompositionAPI from "./components/CompositionAPI.vue";
import SuspenseTemp from "./components/SuspenseTemp.vue";
import TeleportTemp from "./components/TeleportTemp.vue";
import MousePost from "./components/MousePost.vue";
import Counter from "./components/Counter.vue";
</script>

<template>
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <CompositionAPI msg="Vue Simple File Component Composition" />
  <suspense-temp></suspense-temp>
  <teleport-temp></teleport-temp>
  <mouse-post></mouse-post>
  <Counter></Counter>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.modal {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.modal div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 300px;
  height: 300px;
  padding: 5px;
}
</style>

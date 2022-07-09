<template>
  <span>mouse postion {{ x }} {{ y }}</span>
</template>

<script setup>
import { useMousePosition } from "../modals/useMousePosition";

const { x, y } = useMousePosition();
</script>

<style lang="scss" scoped>
</style>
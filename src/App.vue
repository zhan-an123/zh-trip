<script setup>
import Tabbar from "./components/tab-bar/Tabbar.vue";
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <RouterView></RouterView>
  <tabbar v-if="!route.meta.hiddenBar" />
</template>

<style lang="less" scoped></style>

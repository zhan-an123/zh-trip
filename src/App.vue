<script setup>
import Tabbar from "./components/tab-bar/Tabbar.vue";
import Loading from "./components/common/Loading.vue";
import { useRoute } from "vue-router";
import { useLoadingStore } from "@/stores/loading";

const route = useRoute();
const loadingStore = useLoadingStore();
</script>

<template>
  <RouterView></RouterView>
  <tabbar v-if="!route.meta.hiddenBar" />
  <Loading v-if="loadingStore.loading" />
</template>

<style lang="less" scoped></style>

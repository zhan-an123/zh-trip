<script setup>
import { ref } from "vue";

import { getCategories } from "@/services/modules";

const categories = ref([]);

getCategories().then((res) => {
  categories.value = res.data;
});
</script>
<template>
  <div class="category-list">
    <div class="item" v-for="item in categories" :key="item.id">
      <img class="item-img" :src="item.pictureUrl" alt="" />
      <div class="item-title">{{ item.title }}</div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.category-list {
  display: flex;
  width: 100%;
  margin-top: 18px;

  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
    width: 72px;
    .item-img {
      width: 42px;
    }
    .item-title {
      margin-top: 2px;
    }
  }
}
</style>

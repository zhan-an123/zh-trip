<script setup>
import { ref } from "vue";

import { getCategories } from "@/services";

const categories = ref([]);

getCategories().then((res) => {
  categories.value = res.data;
});
</script>
<template>
  <div class="category-list">
    <div class="item" v-for="item in categories" :key="item.id">
      <div class="item-img"><img :src="item.pictureUrl" alt="" /></div>
      <div class="item-title">{{ item.title }}</div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.category-list {
  display: flex;
  flex-wrap: wrap;
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>

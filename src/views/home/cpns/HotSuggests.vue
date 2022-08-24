<script setup>
import { ref } from "vue";

import { getHotSuggests } from "@/services/modules";
const suggestList = ref([]);
getHotSuggests().then((res) => {
  suggestList.value = res.data;
});
</script>
<template>
  <div class="hot-suggests">
    <div
      class="item"
      v-for="item in suggestList"
      :key="item.tagText.text"
      :style="{
        color: item.tagText.color,
        background: item.tagText.background.color,
      }"
    >
      {{ item.tagText.text }}
    </div>
  </div>
</template>
<style lang="less" scoped>
.hot-suggests {
  display: flex;
  flex-wrap: wrap;
  .item {
    padding: 6px;
    margin-right: 4px;
  }
}
</style>

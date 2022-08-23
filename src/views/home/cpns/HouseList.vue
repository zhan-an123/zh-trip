<script setup>
import HouseItemV3 from "@/components/house-item/HouseItemV3.vue";
import HouseItemV9 from "@/components/house-item/HouseItemV9.vue";

import { ref } from "vue";

import { getHouseList } from "@/services/modules";

const houseList = ref([]);

getHouseList().then((res) => {
  houseList.value = res.data;
});
</script>
<template>
  <div class="house-list">
    <template v-for="item in houseList" :key="item.houseId">
      <HouseItemV3 v-if="item.discoveryContentType === 3" />
      <HouseItemV9 v-if="item.discoveryContentType === 9" />
    </template>
  </div>
</template>
<style lang="less" scoped>
.house-list {
  display: flex;
  flex-wrap: wrap;
}
</style>

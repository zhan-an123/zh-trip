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
    <div class="title">热门精选</div>
    <div class="list">
      <template v-for="item in houseList" :key="item.houseId">
        <HouseItemV3 v-if="item.discoveryContentType === 3" :item="item.data" />
        <HouseItemV9 v-if="item.discoveryContentType === 9" :item="item.data" />
      </template>
    </div>
  </div>
</template>
<style lang="less" scoped>
.house-list {
  padding: 12px;
  background-color: #f5f7f9;
  .title {
    margin-bottom: 12px;
    font-size: 18px;
    font-weight: 700;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
  }
}
</style>

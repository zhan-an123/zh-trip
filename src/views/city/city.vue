<script setup>
import GroupCity from "./cpns/GroupCity.vue";
import GroupCityOverSea from "./cpns/GroupCityOverSea.vue";

import { onMounted, ref } from "vue";
import { getCities } from "@/services/modules";

const activeTitle = ref(null);
const cityGroup = ref([]);
const cityGroupOverSea = ref([]);
onMounted(() => {
  getCities().then((res) => {
    cityGroup.value = res.data.cityGroup;
    cityGroupOverSea.value = res.data.cityGroupOverSea;
  });
});

const onClickTab = (title) => {
  activeTitle.value = title;
};
</script>
<template>
  <div class="city">
    <van-tabs v-model="activeTitle" @click-tab="onClickTab">
      <van-tab title="国内·港澳台" name="1"><group-city /></van-tab>
      <van-tab title="海外" name="2">内容 2</van-tab><group-city-overSea />
    </van-tabs>
  </div>
</template>
<style lang="less" scoped></style>

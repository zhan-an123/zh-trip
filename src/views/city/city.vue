<script setup>
import GroupCity from "./cpns/GroupCity.vue";

import { ref } from "vue";
import { useRouter } from "vue-router";
import { getCities } from "@/services/modules";

const activeTitle = ref(null);

const allCities = ref(null);
const keyword = ref("");

const router = useRouter();

getCities().then((res) => {
  allCities.value = res.data;
});

const onSearch = () => {};

const onCancel = () => {
  router.back();
};

const onClickTab = ({ name }) => {
  activeTitle.value = name;
};
</script>
<template>
  <div class="city">
    <van-search
      v-model="keyword"
      show-action
      placeholder="请输入搜索关键词"
      shape="round"
      @search="onSearch"
      @cancel="onCancel"
    />
    <van-tabs
      v-model:active="activeTitle"
      @click-tab="onClickTab"
      color="var(--primary-color)"
    >
      <van-tab title="国内·港澳台" name="1"
        ><group-city :cityGroup="allCities?.cityGroup"
      /></van-tab>
      <van-tab title="海外" name="2"
        ><group-city :cityGroup="allCities?.cityGroupOverSea"
      /></van-tab>
    </van-tabs>
  </div>
</template>
<style lang="less" scoped>
.city {
}
</style>

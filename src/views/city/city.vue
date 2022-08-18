<script setup>
import GroupCity from "./cpns/GroupCity.vue";
import GroupCityOversea from "./cpns/GroupCityOversea.vue";

import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { getCities } from "@/services/modules";

const activeTitle = ref(null);
const cityGroup = ref([]);
const cityGroupOversea = ref([]);
const keyword = ref("");

const router = useRouter();
onMounted(() => {
  getCities().then((res) => {
    // console.log(res, "===");
    cityGroup.value = res.data.cityGroup;
    cityGroupOversea.value = res.data.cityGroupOverSea;
  });
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
      <van-tab title="国内·港澳台" name="1"><group-city /></van-tab>
      <van-tab title="海外" name="2">内容 2</van-tab><group-city-overSea />
    </van-tabs>
  </div>
</template>
<style lang="less" scoped></style>

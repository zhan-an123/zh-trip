<script setup>
import tabbarData from "./tabbar";
import { getImgUrl } from "@/utils";
import { ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";

const activePath = ref("/home");
const router = useRouter();
const route = useRoute();
watch(route, (newVal) => {
  if (newVal.path !== activePath.value) activePath.value = newVal.path;
});
const tabClick = (item) => {
  activePath.value = item.path;
  router.push(item.path);
};
</script>
<template>
  <div class="tabbar">
    <div
      class="tab-item"
      v-for="item in tabbarData"
      :key="item.path"
      @click="tabClick(item)"
      :class="{ 'active-item': activePath === item.path }"
    >
      <img
        class="tab-img"
        v-if="activePath === item.path"
        :src="getImgUrl(item.activeImg)"
        alt=""
      />
      <img class="tab-img" v-else :src="getImgUrl(item.img)" alt="" />
      <div class="tab-text">{{ item.text }}</div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.tabbar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 50px;
  display: flex;
  justify-content: space-around;
  .tab-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    .tab-img {
      height: 24px;
    }
    .tab-text {
      margin-top: 4px;
    }
  }
  .active-item {
    color: var(--primary-color);
  }
  // display: flex;
}
</style>

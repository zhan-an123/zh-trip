<script setup>
import CategoryList from "./cpns/CategoryList.vue";
import HouseList from "./cpns/HouseList.vue";

import { useRouter } from "vue-router";
const router = useRouter();
const goToCity = () => {
  router.push("/city");
};
const getCurrentLocation = () => {
  const geo = navigator.geolocation;
  geo.getCurrentPosition(
    (position) => {
      console.log(position);
    },
    (err) => {
      console.log(err);
    },
    { timeout: 3000 }
  );
};
</script>
<template>
  <div class="home">
    <div class="title">宏源旅途</div>
    <div class="img-box">
      <!-- <img src="" alt=""> -->
    </div>
    <div class="location">
      <div @click="goToCity">广州</div>
      <div @click="getCurrentLocation">
        <span>我的位置</span>
        <img class="location-icon" src="@/assets/img/home/location.png" alt="" />
      </div>
    </div>

    <div class="checkin-info"></div>

    <!-- 推荐类别 -->
    <CategoryList />

    <!-- 房屋列表 -->
    <HouseList />
  </div>
</template>
<style lang="less" scoped>
.home {
  .title {
    font-size: 16px;
    font-weight: 600;
    line-height: 50px;
    color: var(--primary-color);
    text-align: center;
  }
  .img-box {
    height: 240px;
    background-color: #ff0;
  }
  .location {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 18px;
    .location-icon {
      margin-top: -4px;
      margin-left: 6px;
      width: 14px;
      vertical-align: middle;
    }
  }
}
</style>

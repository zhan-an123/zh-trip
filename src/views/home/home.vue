<script setup>
import CheckinInfo from "./cpns/CheckinInfo.vue";
import HotSuggests from "./cpns/HotSuggests.vue";
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
      //经度
      const longitude = position.coords.longitude;
      //纬度
      const latitude = position.coords.latitude;
      console.log("位置:经度", longitude);
      console.log("位置:纬度", latitude);
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
    <div class="content-box">
      <!-- 位置信息 -->
      <div class="location">
        <div @click="goToCity">广州</div>
        <div @click="getCurrentLocation">
          <span>我的位置</span>
          <img class="location-icon" src="@/assets/img/home/location.png" alt="" />
        </div>
      </div>

      <!-- 入住信息 -->
      <CheckinInfo />

      <div class="tips-font search-tips">关键词/位置/民宿名</div>

      <!-- 热门建议 -->

      <HotSuggests />

      <van-button
        block
        round
        size="small"
        color="linear-gradient(to right,#ff9513, #ffb82e)"
      >
        开始搜索
      </van-button>

      <!-- 推荐类别 -->
      <CategoryList />
    </div>

    <!-- 房屋列表 -->
    <HouseList />
  </div>
</template>
<style lang="less" scoped>
.home {
  width: 100%;
  margin-bottom: 50px;
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
  .content-box {
    padding: 0 18px;
    margin-bottom: 18px;
    .location {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 0;
      .location-icon {
        margin-top: -4px;
        margin-left: 6px;
        width: 14px;
        vertical-align: middle;
      }
    }
    .search-tips {
      margin: 18px 0;
    }
  }
}
</style>

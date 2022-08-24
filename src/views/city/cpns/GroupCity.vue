<script setup>
import { computed } from "vue";
const props = defineProps({
  cityGroup: Object,
});

const indexList = computed(() => {
  const list = props.cityGroup?.cities.map((item) => item.group);

  return list;
});
</script>
<template>
  <div class="group-city">
    <div class="hot-city">
      <div
        class="hot-item"
        v-for="item in props.cityGroup?.hotCities"
        :key="item.cityId"
      >
        {{ item.cityName }}
      </div>
    </div>
    <van-index-bar
      :index-list="indexList"
      :sticky="false"
      highlight-color="var(--primary-color)"
    >
      <template v-for="city in props.cityGroup?.cities" :key="city.group">
        <van-index-anchor :index="city.group" />
        <van-cell
          v-for="item in city.cities"
          :title="item.cityName"
          :key="item.cityId"
        />
      </template>
    </van-index-bar>
  </div>
</template>
<style lang="less" scoped>
.group-city {
  .hot-city {
    display: flex;
    flex-wrap: wrap;
    padding: 0 24px;
    justify-content: space-between;
    margin-right: -18px;
    .hot-item {
      padding: 6px 18px;
      margin: 12px 18px 0 0;
      background-color: #fff4ec;
      border-radius: var(--border-radius-sm);
    }
  }
}
</style>

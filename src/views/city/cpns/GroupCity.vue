<script setup>
import { computed } from "vue";
const props = defineProps({
  cityGroup: Object,
});

const indexList = computed(() => {
  const list = props.cityGroup.cities.map((item) => item.group);
  return list;
});
</script>
<template>
  <div class="group-city">
    <div class="hot-city">
      <div v-for="item in props.cityGroup.hotCities" :key="item.cityId">
        {{ item.cityName }}
      </div>
    </div>

    <van-index-bar :index-list="indexList">
      <template v-for="city in props.cityGroup.cities" :key="city.group">
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
<style scoped></style>

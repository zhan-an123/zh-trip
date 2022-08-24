<script setup>
import { ref } from "vue";

import { getDetailInfo } from "@/services/modules";

const detailList = ref([]);

getDetailInfo().then((res) => {
  detailList.value = res.data.data;
});
</script>
<template>
  <div class="detail"></div>
</template>
<style lang="less" scoped></style>

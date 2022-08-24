<script setup>
const props = defineProps({
  item: Object,
});
</script>
<template>
  <div class="house-item-v3">
    <img class="item-img" :src="props.item?.image.url" alt="" />
  </div>
</template>
<style lang="less" scoped>
.house-item-v3 {
  overflow: hidden;
  width: 48%;
  height: 240px;
  background-color: #fff;
  border-radius: var(--border-radius-xs);
  .item-img {
    width: 100%;
  }
}
</style>

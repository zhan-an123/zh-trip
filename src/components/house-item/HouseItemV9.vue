<script setup>
const props = defineProps({
  item: Object,
});
</script>
<template>
  <div class="house-item-v9">
    <img class="item-img" :src="props.item?.image.url" alt="" />
  </div>
</template>
<style lang="less" scoped>
.house-item-v9 {
  position: relative;
  width: 48%;
  height: 240px;
  overflow: hidden;
  margin-bottom: 12px;
  border-radius: var(--border-radius-xs);
  .item-img {
    position: absolute;
    height: 240px;
  }
}
</style>

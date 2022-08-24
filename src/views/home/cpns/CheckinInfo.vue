<script setup></script>
<template>
  <div class="checkin-info">
    <div class="info">
      <div class="flex-colunm-center left">
        <span class="tips-font">入住</span>
        <span class="date">8月25日</span>
      </div>
      <div class="center">共一晚</div>
      <div class="flex-colunm-center right">
        <span class="tips-font">离店</span>
        <span class="date">8月26日</span>
      </div>
    </div>
    <div class="tips-font tips"><span>价格不限</span><span>人数不限</span></div>
  </div>
</template>
<style lang="less" scoped>
.checkin-info {
  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .date {
      margin-top: 6px;
    }
  }
  .tips {
    display: flex;
    justify-content: space-between;
    margin-top: 12px;
  }
}
</style>

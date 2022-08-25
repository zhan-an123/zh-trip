<script setup></script>
<template>
  <div class="loading">
    <img class="img" src="@/assets/img/loading/loading.png" alt="" />
    <div class="text">拼命加载中...</div>
  </div>
</template>
<style lang="less" scoped>
.loading {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 50px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000;
  opacity: 0.6;
  .img {
    width: 80px;
    animation: load 2s linear infinite;
  }
  .text {
    margin-top: 12px;
    color: var(--text-color);
  }

  @keyframes load {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>

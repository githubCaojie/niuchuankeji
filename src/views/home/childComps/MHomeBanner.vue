<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="item in 2" :key="item">
      <van-image
        src="https://www-file.huawei.com/-/media/corp2020/home/banner/4/mate40-series-m.jpg"
      />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  .my-swipe {
    padding-top: 66px;
    /deep/ .van-image {
      width: 100%;
    } 
    /deep/ .van-swipe-item {
      font-size: 0;
    }
  }
</style>
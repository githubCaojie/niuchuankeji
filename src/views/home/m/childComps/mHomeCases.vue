<template>
  <div class="m">
    <m-home-content-title>
      <h2 slot="name">{{theTitle.name}}</h2>
      <h4 slot="translation">{{theTitle.translation}}</h4>
    </m-home-content-title>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="item in cases" :key="item.id">
        <div class="mask"></div>
        <p class="img img-box">
          <van-image fit="cover" :src="item.bigPicture" />
        </p>
        <div class="text-box">
          <div class="title">{{item.successfulCasesName}}</div>
          <div class="content">{{item.briefIntroduction}}</div>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import mHomeContentTitle from '@/components/content/HomeContentTitle/mHomeContentTitle';

import { Swipe, SwipeItem, Image as VanImage } from 'vant';

export default {
  components: {
    mHomeContentTitle,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [VanImage.name]: VanImage
  },
  props: {
    cases: {
      type:  Array,
      default() {
        return []
      }
    }
  },
  data () {
    return {
      theTitle: {
        name: '成功案例',
        translation: 'CASES'
      }
    }
  }
}
</script>

<style lang="less" scoped>
.m {
  padding-bottom: 1rem;
  .mask {
    height: 80% ;
      background: linear-gradient(rgba(0,0,0,0) 0%,rgba(0,0,0,0.7) 70%);
  }
  .van-swipe {
    height: 6rem;
    .text-box {
      bottom: 0;
      font-size: 0.3rem;
      padding: 0.8rem 0.5rem;
      .title {
        font-size: 0.5rem;
        margin-bottom: 0.2rem;
      }
    }
    .van-image {
      width: 100%;
      height: 100%;
    }
  }
  .mask {
    visibility: visible;
    opacity: 1;
    height: 50%;
    width: 100%;
    content: "";
    background: linear-gradient(rgba(0,0,0,0) 0%,rgba(0,0,0,0.3) 70%);
    display: block;
    top: auto;
    left: 0;
    bottom: 0;
    position: absolute;
    z-index: 1;
  }
  .text-box {
    position: absolute;
    left: 0;
    z-index: 9;
    color: #ffffff;
    width: 100%;
    .title {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-weight: bold;
    }
    .content {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      opacity: 0.7;
    }
  }
  .cases-item {
    height: 100%;
    position: relative;
  }
}
</style>
<template>
  <div class="cooperation-content">
    <div class="m">
      <m-home-content-title class="white">
        <h2 slot="name">{{theTitle.name}}</h2>
        <h4 slot="translation">{{theTitle.translation}}</h4>
      </m-home-content-title>
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="item in copperation.slice(0,3)" :key="item.id">
          <p class="img"><van-image fit="cover" :src="item.bigPicture" /></p>
          <div class="title-text">{{item.title}}</div>
        </van-swipe-item>
      </van-swipe>
      <van-row gutter="15">
        <van-col span="12" v-for="item in copperation.slice(0,4)" :key="item.id">
          <p class="img"><van-image fit="cover" :src="item.bigPicture" /></p>
        </van-col>
      </van-row>
    </div>
</div>
</template>

<script>
import mHomeContentTitle from '@/components/content/HomeContentTitle/mHomeContentTitle';

import { Swipe, SwipeItem, Image as VanImage, Col, Row } from 'vant';

export default {
  components: {
    mHomeContentTitle,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [VanImage.name]: VanImage,
    [Col.name]: Col,
    [Row.name]: Row
  },
  props: {
    copperation: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data () {
    return { 
      theTitle: {
        name: '生态合作',
        translation: 'COPPERATION'
      },
    }
  }
}
</script>

<style lang="less" scoped>
.cooperation-content {
  background-color: #01267f;
  .m {
    margin: 0 0.27rem;
    .title-text {
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      transform: translateY(-50%);
      text-align:center;
      z-index: 9;
      color: #2f456a;
      font-size: 20px;
      font-weight: bold;
    }
    .van-swipe {
      .van-image {
        height: 6rem;
      }
    }
    .van-row {
      padding: 0.5rem 0;
      .van-col {
        padding: 0.25rem 0;
        .van-image {
          height: 3rem;
        }
      }
    }
  }
}
</style>
<template>
  <div>
    <m-child-banner/>
    <div class="m content">
      <van-row>
        <van-col v-for="item in detail" :key="item.id">
          <van-image :src="item.bigPicture"/>
          <div class="text">
            <p class="title">{{item.title}}</p>
            <p class="describe text3hidden" v-html="item.briefIntroduction"></p>
          </div>
        </van-col>
        <van-col>
          <div class="text">
            <p class="title">伙伴方案组成</p>
            <van-image :src="require('../../../assets/img/partnerImg.png')"/>
          </div>
        </van-col>
        <van-col>
          <div class="text">
            <p class="title">成为视频监控合作伙伴</p>
            <van-image :src="require('../../../assets/img/partnerImg2.png')"/>
          </div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import mChildBanner from '../../../components/content/childBanner/mChildBanner';

import { Image as VanImage, Col, Row} from 'vant'

export default {
  components: {
    mChildBanner,
    [VanImage.name]: VanImage,
    [Col.name]: Col,
    [Row.name]: Row
  },
  props: {
    detail: {
      type: Array,
      default() {
        return []
      }
    }
  },
}
</script>

<style lang="less" scoped>
.content {
  padding: 0.5rem 0;
  .title {
    font-size: 0.5rem;
    text-align: center;
    margin: 1rem 0 0.2rem;
  }
  .van-image {
    margin: 0 auto;
    display: block;
  }
}
</style>
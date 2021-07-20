<template>
  <div>
    <m-child-banner />
    <van-row>
      <van-col v-for="item in solutionCentent" :key="item.id">
        <div class="item m" @click="goSolutionDetail(item.id)">
          <van-image :src="item.bigPicture"/>
          <div class="text">
            <h3 class="title text1hidden">{{item.solutionName}}</h3>
            <div class="introduce text3hidden" v-html="item.briefIntroduction"></div>
          </div>
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import mChildBanner from '../../../components/content/childBanner/mChildBanner';

import { Image as VanImage, Col, Row } from 'vant';

export default {
  components: {
    mChildBanner,
    [VanImage.name]: VanImage,
    [Col.name]: Col,
    [Row.name]: Row
  },
  props: {
    solutionCentent: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    goSolutionDetail(id) {
      this.$emit('goSolutionDetail', id)
    }
  }
}
</script>

<style lang="less" scoped>
.van-row {
  padding: 0.5rem 0;
  .van-col:nth-last-child(odd) {
    background-color: #f4f4f4;
    .item {
      flex-direction: row-reverse;
    }
  }
  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.25rem 0;
    .van-image {
      width: 3.5rem;
      height: 2.4rem;
    }
    .text {
      width: 5.8rem;
      margin-left: 0.2rem;
      color: #666666;
      .title {
        padding: 0.1rem 0;
        font-size: 0.45rem;
      }
      .introduce {
        font-size: 0.35rem;
        text-indent: 0.7rem;
      }
    }
  }
}
</style>
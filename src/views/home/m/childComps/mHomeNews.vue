<template>
<div class="m">
  <m-home-content-title>
    <h2 slot="name">{{theTitle.name}}</h2>
    <h4 slot="translation">{{theTitle.translation}}</h4>
  </m-home-content-title>
  <van-row>
    <van-col span="24" v-for="item in news" :key="item.id" class="item">
      <div @click="goNewsContent(item.id)">
        <p class="img">
          <van-image fit="cover" :src="item.bigPicture"/>
        </p>
        <div class="text-box">
          <div class="title">{{item.title}}</div>
          <div class="date">{{item.time}}</div>
          <div class="content">{{item.briefIntroduction}}</div>
        </div>
      </div>
    </van-col>
  </van-row>
</div>
</template>

<script>
import mHomeContentTitle from '@/components/content/HomeContentTitle/mHomeContentTitle';

import { Image as VanImage, Col, Row } from 'vant';

export default {
  components: {
    mHomeContentTitle,
    [VanImage.name]: VanImage,
    [Col.name]: Col,
    [Row.name]: Row
  },
  props: {
    news: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data () {
    return {
      theTitle: {
        name: '新闻资讯',
        translation: 'NEWS'
      }
    }
  },
  methods: {
    goNewsContent(id) {
      let routeUrl = this.$router.resolve({
        path: 'contentDetail',
        query: {
          type: 'news',
          newsId: id
        }
      })
      window.open(routeUrl.href, '_blank');
    },
  }
}
</script>

<style lang="less" scoped>

.m {
  margin: 0 0.27rem;
  .item {
    background-color: var(--home-element-background);;
    margin-bottom: 0.27rem;
    color: #ffffff;
    .text-box {
      padding: 0.37rem 0.37rem;
      .title {
        font-size: 0.45rem;
        line-height: 0.6rem;
      }
      .date {
        font-size: 0.37rem;
        margin: 0.2rem 0;
      }
      .content {
        height: auto;
        font-size: 0.35rem;
        line-height: 0.6rem;
      }
    }
  }
}
</style>
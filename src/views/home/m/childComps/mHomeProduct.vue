<template>
<div class="m">
  <m-home-content-title>
    <h2 slot="name">{{theTitle.name}}</h2>
    <h4 slot="translation">{{theTitle.translation}}</h4>
  </m-home-content-title>
  <div class="class">
    <a href="javascript:;" class="class-item" v-for="item in classData" :key="item.id">
      <van-image fit="cover" :src="require('@/assets/img/' + item.iconUrl)"/>
      <h4 class="title">{{item.name}}</h4>
    </a>
  </div>
  <van-row gutter="15">
    <van-col span="12" v-for="item in product" :key="item.id">
      <a @click.prevent="productImgItemClick(item.urlpath)" class="img-item">
        <p class="img"><van-image fit="cover" :src="item.bigPicture"/></p>
        <div class="text-box">
          <div class="text text3hidden">
            {{item.briefIntroduction}}
          </div>
        </div>
      </a>
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
    product: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      theTitle: {
        name: '产品方案',
        translation: 'PRODUCTS'
      },
      classData: [
        {
          name: '智能终端',
          note: ['自助服务终端','智能会议交互终端','多媒体智能终端','桌面智能终端'],
          iconUrl:'HomeSasesIcon/products_01.png',
        },
        {
          name: '集成系统',
          note: ['协同办公方案','移动办公解决方案','信息系统容灾备案解决方案'],
          iconUrl:'HomeSasesIcon/products_02.png',
        },
        {
          name: '运维服务',
          note: ['可视化运维管理平台解决方案','质效型运维管理解决方案'],
          iconUrl:'HomeSasesIcon/products_03.png',
        }
      ],
    }
  },
  methods: {
    productImgItemClick(url) {
      let routeUrl = this.$router.resolve({
        path: 'productCenter'
      })
      window.open(routeUrl.href, '_blank');
    },
  }
}
</script>

<style lang="less" scoped>
.m {
  .class {
    font-size: 0.4rem;
    margin: 15px 0;
    display: flex;
    justify-content: space-between;
    /deep/ .van-image {
      background-color: var(--home-element-background);
      width: 2rem;
      height: 2rem;
      padding: 0.5rem;
      border-radius: 50%;
    }
    .title {
      text-align: center;
      color: var(--home-element-background);
    }
  }
  .img-item {
    display: block;
    margin-bottom: 0.3rem;
    /deep/ .van-image {
      height: 4rem;
    }
    .text-box {
      color: var(--white-font-clolr);
      background-color: var(--home-element-background);
      padding: 0.25rem 0;
      .text {
        height: 1.5rem;
        font-size: 0.25rem;
        text-indent: 0.5rem;
        line-height: 0.5rem;
        margin: 0 0.25rem;
      }
    }
  }
}
</style>
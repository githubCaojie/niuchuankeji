<template>
<div class="about-content">
  <div class="m">
    <m-home-content-title class="white">
      <h2 slot="name">{{theTitle.name}}</h2>
      <h4 slot="translation">{{theTitle.translation}}</h4>
    </m-home-content-title>
    <div class="about-copy" v-html="company.companyProfile"></div>
    <van-row class="panel-list">
      <van-col
        span="6"
        class="panel-item"
        v-for="(item,i) in panelData"
        :key="i"
      >
        <div @click="goAbout(item.type)">
          <van-image :src="item.img"/>
        </div>
      </van-col>
    </van-row>
  </div>
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
    company: {
      type: Object,
      default() {
        return {}
      }
    },
  },
  data () {
    return {
      theTitle: {
        name: '关于我们',
        translation: 'ABOUT US'
      },
      panelData: [
        {
          img: require('../../../../assets/img/HomeServiceIcon/introduction.png')
        },
        {
          img: require('../../../../assets/img/HomeServiceIcon/culture.png')
        },
        {
          img: require('../../../../assets/img/HomeServiceIcon/qualification.png')
        },
        {
          img: require('../../../../assets/img/HomeServiceIcon/recruitment.png')
        }
      ]
    }
  },
  methods: {
    goAbout(type) {
      if(type === 'recruitments') {
        let routeUrl = this.$router.resolve({
          path: 'recruitments'
        })
        window.open(routeUrl.href, '_blank');
      }else {
        let routeUrl =this.$router.resolve({
          path: 'aboutus',
          query: {
            type: type
          }
        })
        window.open(routeUrl.href, '_blank');
      }
    }
  }
}
</script>

<style lang="less" scoped>
.about-content {
  background-image: url('../../../../assets/img/about_bg.jpg');
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: block;
  .about-copy {
    color: #ffffff;
  }
  .m {
    .about-copy {
      font-size: 0.35rem;
      text-indent: 0.7rem;
      line-height: 0.6rem;
    }
    .panel-item {
      padding: 1rem 0.3rem;
    }
  }
}
</style>
<template>
  <div class="cooperation-content pt-70-pb-60">
    <home-content-title class="white">
      <h2 :style="{color: theTitle.nameColor}" slot="name">{{theTitle.name}}</h2>
      <h4 slot="translation">{{theTitle.translation}}</h4>
    </home-content-title>
    <div class="pc hidden-xs hidden-sm">
      <el-row :gutter="20">
        <el-col :span="8" v-for="item in copperation.slice(0,3)" :key="item.id">
          <p class="img"><el-image fit="cover" :src="item.bigPicture"/></p>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6" v-for="item in copperation.slice(0,4)" :key="item.id">
          <p class="img"><el-image fit="cover" :src="item.bigPicture"/></p>
        </el-col>
      </el-row>
    </div>
    <div class="m hidden-md hidden-lg">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="item in copperation.slice(0,3)" :key="item.id">
          <p class="img"><van-image :src="item.bigPicture" /></p>
          <div class="title">{{item.title}}</div>
        </van-swipe-item>
      </van-swipe>
      <van-row gutter="15">
        <van-col span="12" v-for="item in copperation.slice(0,4)" :key="item.id">
          <p class="img"><van-image :src="item.bigPicture" /></p>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import homeContentTitle from '../../../components/content/homeContentTitle/homeContentTitle'
import { Swipe, SwipeItem, Image as VanImage, Col, Row } from 'vant';

export default {
  components: {
    homeContentTitle,
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
  data() {
    return {
      theTitle: {
        name: '生态合作',
        translation: 'COPPERATION'
      },
      classData: [
        {
          name: '视频监控合作伙伴',
          img: 'HomeCopperation/copperation_01.png'
        },
        {
          name: '法院行业合作伙伴',
          img: 'HomeCopperation/copperation_02.png'
        },
        {
          name: '智能终端设备合作伙伴',
          img: 'HomeCopperation/copperation_03.png'
        },
      ],
      brandData: [
        {
          img: 'hikvision.png'
        },
        {
          img: 'hikvision.png'
        },
        {
          img: 'hikvision.png'
        },
        {
          img: 'hikvision.png'
        }
      ]
    }
  },
}
</script>

<style lang="less" scoped>
.cooperation-content {
  background-color: #01267f;
  .pc {
    width: 80%;
    margin: 0 auto;
    /deep/ .el-image {
      height: 100%;
    }
    .el-col {
      margin-bottom: 1.11rem;
    }
    .el-col-8 {
      p.img {
        height: 3.24rem;
      }
    }
    .el-col-6 {
      p.img {
        height: 1.85rem;
      }
    }
  }
  .m {
    margin: 0 15px;
    font-size: 0;
    /deep/ .van-image {
      width: 100%;
    }
    .title {
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
    .van-row {
      padding: 0.5rem 0;
      .van-col {
        padding: 0.25rem 0;
      }
      .van-col:nth-child(odd) {
        padding-right: 0.25rem;
      }
      .van-col:nth-child(even) {
        padding-left: 0.25rem;
      }
    }
  }
}
</style>
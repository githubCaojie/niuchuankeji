<template>
  <div class="news-content pt-70-pb-60">
    <home-content-title>
      <h2 :style="{color: theTitle.nameColor}" slot="name">{{theTitle.name}}</h2>
      <h4 slot="translation">{{theTitle.translation}}</h4>
    </home-content-title>
    <div class="pc hidden-xs hidden-sm">
      <el-row :gutter="60">
        <el-col :span="8" v-for="item in news" :key="item.id">
          <div class="item">
            <a href="javascript:;">
              <div class="box">
                <p class="img">
                  <el-image fit="cover" :src="item.bigPicture"/>
                </p>
                <div class="text">
                  <div class="title">{{item.title}}</div>
                  <div class="date">{{item.time}}</div>
                  <div class="content">{{item.briefIntroduction}}</div>
                </div>
              </div>
            </a>
          </div>
        </el-col>
      </el-row>
      <el-button type="primary">查看更多</el-button>
    </div>
    <div class="m hidden-md hidden-lg">
      <van-row>
        <van-col span="24" v-for="item in news" :key="item.id" class="item">
          <p class="img">
            <van-image fit="cover" :src="item.bigPicture"/>
          </p>
          <div class="text-box">
            <div class="title">{{item.title}}</div>
            <div class="date">{{item.time}}</div>
            <div class="content">{{item.briefIntroduction}}</div>
          </div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import homeContentTitle from '../../../components/content/homeContentTitle/homeContentTitle'
import { Image as VanImage, Col, Row } from 'vant';

export default {
  components: {
    homeContentTitle,
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
  data() {
    return {
      theTitle: {
        name: '新闻资讯',
        translation: 'NEWS'
      },
      newsData: [
        {
          title: '2021中国国际大数据产业博览会',
          date: '2020-05-31',
          content: '智链是基于区块链技术构建的司法区块链管理平台，提供在法律业务相关活动场景下的区块链可信服务。',
          img: 'banner.png'
        },
        {
          title: '2021中国国际大数据产业博览会',
          date: '2020-05-31',
          content: '智链是基于区块链技术构建的司法区块链管理平台，提供在法律业务相关活动场景下的区块链可信服务。',
          img: 'banner.png'
        },
        {
          title: '2021中国国际大数据产业博览会',
          date: '2020-05-31',
          content: '智链是基于区块链技术构建的司法区块链管理平台，提供在法律业务相关活动场景下的区块链可信服务。',
          img: 'banner.png'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.news-content {
  .pc {
    width: 80%;
    margin: 0 auto;
    .item {
      background-color: #014eb6;
      .box {
        .el-image {
          height: 4.62rem;
        }
        .text {
          color: #ffffff;
          padding: 0.40rem 0.45rem;
          .title {
            font-size: 0.33rem;
          }
          .date {
            font-size: 0.29rem;
            margin: 0.25rem 0 0.42rem;
          }
          .content {
            font-size: 0.26rem;
            height: 1.04rem;
            text-indent: 0.52rem;
            line-height: 0.35rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
          }
        }
      }
    }
    .el-button {
      font-size: 0.3rem;
      display: block;
      margin: 1.11rem auto 1.85rem;
      background-color: #034db6;
      border: unset;
      border-radius: unset;
    }
  }
  .m {
    margin: 0 0.27rem;
    .item {
      background-color: #014eb6;
      margin-bottom: 0.27rem;
      color: #ffffff;
      .text-box {
        padding: 0.37rem 0.27rem;
        .title {
          font-size: 0.45rem;
        }
        .date {
          font-size: 0.37rem;
          margin: 0.2rem 0;
        }
        .content {
          height: auto;
          font-size: 0.35rem;
        }
      }
    }
  }
}
</style>
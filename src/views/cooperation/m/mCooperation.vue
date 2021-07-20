<template>
  <div>
    <m-child-banner/>
    <div class="m">
      <div class="introduce">
        <h3 class="name">纽川科技生态</h3>
        <div class="content" v-html="company"></div>
      </div>
      <div class="class">
        <van-swipe :loop="false" :width="220">
          <van-swipe-item v-for="item in cooperation" :key="item.id">
            <div class="item">
              <p class="img"><van-image :src="item.bigPicture"/></p>
              <div class="text">
                <p class="title text1hidden">{{item.title}}</p>
                <p class="describe text3hidden">{{item.briefIntroduction}}</p>
              </div>
              <van-button type="info" @click="goCooperationDeyail(item.id)">查看更多</van-button>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="partner">
        <h3 class="name">合作伙伴展示</h3>
        <div class="label">覆盖法律行业及律师，公司法务和视频监控行业、智能终端行业</div>
        <div class="content">
          <van-row gutter="10">
            <van-col v-for="item in partner" :key="item.id" span="6">
              <p class="img"><van-image :src="item.image" fit="cover"/></p>
            </van-col>
          </van-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mChildBanner from '../../../components/content/childBanner/mChildBanner'

import { Image as VanImage, Swipe, SwipeItem, Button, Col, Row } from 'vant';

export default {
  components: {
    mChildBanner,
    [VanImage.name]: VanImage,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Button.name]: Button,
    [Col.name]: Col,
    [Row.name]: Row
  },
  props: {
    company: {
      type: String,
      default() {
        return ''
      }
    },
    cooperation: {
      type: Array,
      default() {
        return []
      }
    },
    partner: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    goCooperationDeyail(id) {
      this.$emit('goCooperationDeyail', id)
    }
  }
}
</script>

<style lang="less" scoped>
.name {
  font-size: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  padding: 0.8rem 0;
}
.introduce {
  padding-bottom: 1rem;
  .content {
    color: #6a6a6a;
    font-size: 0.35rem;
  }
}
.class {
  .van-swipe {
    /deep/ .van-swipe__track {
      padding-bottom: 0.7rem;
      .van-swipe-item {
        padding: 0 0.2rem;
        .item {
          border: 1px solid #e2e2e2;
          .van-image {
            height: 3rem;
          }
          .text {
            border-top: 1px solid #e2e2e2;
            margin: 0 0.2rem;
            color: #666666;
            .title {
              font-size: 0.4rem;
              text-align: center;
              margin: 0.2rem 0;
            }
            .describe {
              text-indent: 0.6rem;
              font-size: 0.3rem;
              margin: 0.2rem 0;
              line-height: 0.35rem;
              height: 1.05rem;
            }
          }
          .van-button {
            display: block;
            font-size: 0.3rem;
            padding: 0 0.2rem;
            height: 0.6rem;
            margin: 0.2rem auto;
          }
        }
      }
    }
  }
}
.partner {
  .label {
    color: #6a6a6a;
    font-size: 0.35rem;
    line-height: 0.5rem;
    text-align: center;
  }
  .content {
    .van-image{
      height: 1.5rem;
    }
  }
}
</style>
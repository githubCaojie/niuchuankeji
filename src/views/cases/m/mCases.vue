<template>
  <div>
    <m-child-banner :bannerContent="bannerContent"/>
    <div class="m">
      <div class="content">
        <van-row :gutter="10">
          <van-col
            v-for="item in cases.list"
            :key="item.id"
            span="12"
          >
            <a href="javascript:;" class="item">
              <p class="img"><van-image fit="cover" :src="item.bigPicture"/></p>
              <p class="name text1hidden">{{item.productName}}</p>
              <p class="text text3hidden">{{item.briefIntroduction}}</p>
            </a>
          </van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>

<script>
import mChildBanner from '../../../components/content/childBanner/mChildBanner';

import { Image as VanImage, Col, Row, Pagination } from 'vant';

export default {
  components: {
    mChildBanner,
    [VanImage.name]: VanImage,
    [Col.name]: Col,
    [Row.name]: Row,
    [Pagination.name]: Pagination
  },
  props: {
    bannerContent: {
      type: Object,
      default() {
        return {}
      }
    },
    cases: {
      type: Object,
      default() {
        return {}
      }
    }
  },
}
</script>

<style lang="less" scoped>
.content {
  min-height: 802px;
  padding: 90px 0;
  .item {
    display: block;
    border: 1px solid #e2e2e2;
    margin-bottom: 60px;
    .text {
      border-top: 1px solid #e2e2e2;
      color: #666666;
      padding: 0 12px 12px;
      .title {
        text-align: center;
        font-size: 16.88px;
        line-height: 66px;
        font-weight: 600;
      }
      .describe {
        font-size: 14px;
        line-height: 20px;
        text-indent: 28px;
        height: 60px;
      }
    }
    .btn {
      text-align: center;
      padding: 30px;
      button {
        font-size: 14px;
        background-color: #024eb7;
        border-radius: unset;
        color: #ffffff;
        width: 100px;
        border: unset;
      }
    }
  }
}
.pagination {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
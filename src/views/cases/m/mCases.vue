<template>
  <div>
    <m-child-banner />
    <div class="m">
      <div class="content">
        <van-row :gutter="10">
          <van-col
            v-for="item in cases.list"
            :key="item.id"
            span="12"
          >
            <div class="item">
              <p class="img"><van-image fit="cover" :src="item.bigPicture"/></p>
              <div class="text">
                <p class="title text1hidden">{{item.successfulCasesName}}</p>
                <p class="describe text3hidden">{{item.briefIntroduction}}</p>
              </div>
              <van-button type="info" @click="goCasesDetail(item.id)">查看更多</van-button>
            </div>
          </van-col>
        </van-row>
      </div>
      <van-pagination
        v-model="currentPage"
        :total-items="cases.total"
        :items-per-page="cases.pageSize"
          @change="handleCurrentChange" 
      />
    </div>
  </div>
</template>

<script>
import mChildBanner from '../../../components/content/childBanner/mChildBanner';

import { Image as VanImage, Col, Row, Pagination, Button } from 'vant';

export default {
  components: {
    mChildBanner,
    [VanImage.name]: VanImage,
    [Col.name]: Col,
    [Row.name]: Row,
    [Pagination.name]: Pagination,
    [Button.name]: Button
  },
  props: {
    cases: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data () {
    return {
      currentPage: 1
    }
  },
  methods: {
    handleCurrentChange(e) {
      this.$emit('handleCurrentChange', e)
    },
    goCasesDetail(id) {
      this.$emit('goCasesDetail', id)
    }
  },
}
</script>

<style lang="less" scoped>
.content {
  padding: 0.5rem 0;
  .item {
    display: block;
    border: 1px solid #e2e2e2;
    margin-bottom: 0.5rem;
    .van-image {
      height: 3rem;
    }
    .text {
      border-top: 1px solid #e2e2e2;
      color: #666666;
      margin: 0 0.2rem;
      .title {
        font-size: 0.4rem;
        text-align: center;
        margin: 0.2rem 0;
      }
      .describe {
        text-indent: 0.6rem;
        font-size: 0.3rem;
        line-height: 0.35rem;
        height: 1.05rem;
        margin: 0.2rem 0;
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
/deep/ .van-pagination {
  padding: 0.5rem 0;
}
</style>
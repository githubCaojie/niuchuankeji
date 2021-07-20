<template>
  <div>
    <m-child-banner />
    <div class="m">
      <div class="content">
        <van-row :gutter="10">
          <van-col
            v-for="item in productCenteCentent.list"
            :key="item.id"
            span="12"
          >
            <div class="item" @click="goProductDetail(item.id)">
              <p class="img"><van-image fit="cover" :src="item.bigPicture"/></p>
              <p class="name text1hidden">{{item.productName}}</p>
              <p class="text text3hidden">{{item.briefIntroduction}}</p>
            </div>
          </van-col>
        </van-row>
        <van-pagination 
          v-model="currentPage"
          :total-items="productCenteCentent.total"
          :items-per-page="productCenteCentent.pageSize"
          @change="handleCurrentChange" 
        />
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
  data () {
    return {
      currentPage: 1,  
    }
  },
  props: {
    productCenteCentent: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    handleCurrentChange(e) {
      this.$emit('handleCurrentChange', e)
    },
    goProductDetail(id) {
      this.$emit('goProductDetail', id)
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  margin: 1rem 0;
  .item {
    display: block;
    border: 1px solid #e2e2e2;
    margin-bottom: 10px;
    background-color: #fff;
    .van-image {
      width: 100%;
      height: 4rem;
      border-bottom: 1px solid #e2e2e2;
    }
    .name {
      font-size: 0.4rem;
      text-align: center;
      line-height: 0.8rem;
      margin: 0 5px;
    }
    .text {
      font-size: 0.35rem;
      line-height: 0.4rem;
      text-indent: 0.7rem;
      height: 1.18rem;
      margin: 5px;
    }
  }
}
</style>
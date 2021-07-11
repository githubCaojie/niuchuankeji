<template>
  <div>
    <pc-child-banner :bannerContent="bannerContent"/>
    <div class="pc">
      <div class="breadcrumb">
        <pc-bread-crumb :breadCrumb="breadCrumb"/>
      </div>
      <div class="content">
        <div v-for="item in detail" :key="item.id">
          <h3 class="title">{{item.successfulCasesName || item.title}}</h3>
          <div class="img">
            <pc-image :src="item.bigPicture" height="220px" width="360px"/>
          </div>
          <div class="text" v-html="item.introduce || item.newsIntroduce">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pcChildBanner from '../../../components/content/childBanner/pcChildBanner';
import pcBreadCrumb from '../../../components/content/breadCrumb/pcBreadCrumb';
import pcImage from '../../../components/content/ncImage/pcImage';

export default {
  components: {
    pcChildBanner,
    pcBreadCrumb,
    pcImage
  },
  props: {
    bannerContent: {
      type: Object,
      default() {
        return {}
      }
    },
    breadCrumb: {
      type: Array,
      default() {
        return []
      }
    },
    detail: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="less" scoped>
.breadcrumb {
  margin: 90px 0 60px;
}
.content {
  h3.title {
    text-align: center;
    font-size: 30px;
  }
  .img {
    margin: 60px auto;
  }
  .text {
    font-size: 18px;
    text-indent: 36px;
    margin-bottom: 90px;
    /deep/ img {
      margin: 0 auto;
    }
  }
}
</style>
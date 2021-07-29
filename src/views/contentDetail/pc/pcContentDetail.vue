<template>
  <div>
    <pc-child-banner />
    <div class="breadcrumb">
      <pc-bread-crumb/>
    </div>
    <div class="pc">
      <div class="content">
        <div v-for="item in detail" :key="item.id">
          <h3 class="title">{{item.successfulCasesName || item.title || item.productName || item.solutionName}}</h3>
          <div class="label"><span v-show="item.time">发布时间：{{item.time}}</span><span v-show="source">来源：{{item.source}}</span></div>
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

export default {
  components: {
    pcChildBanner,
    pcBreadCrumb
  },
  props: {
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
.content {
  h3.title {
    text-align: center;
    font-size: 30px;
  }
  .label {
    text-align: center;
    font-size: 14px;
    color: #999999;
    margin: 30px auto 60px;
    span {
      margin: 0 10px;
    }
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
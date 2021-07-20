<template>
  <div>
    <m-child-banner />
    <div class="m content">
      <div v-for="item in detail" :key="item.id">
        <h3 class="title">{{item.successfulCasesName || item.title || item.productName || item.solutionName}}</h3>
        <div class="label"><span>发布时间：{{item.time}}</span><span>来源：{{item.source}}</span></div>
        <div class="text" v-html="item.introduce || item.newsIntroduce">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mChildBanner from '../../../components/content/childBanner/mChildBanner';

export default {
  components: {
    mChildBanner
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
  padding: 0.5rem 0;
  .title {
    font-size: 0.5rem;
    text-align: center;
  }
  .label {
    padding: 0.2rem 0;
    span {
      display: block;
      text-align: center;
    }
  }
}
</style>
<style lang="less">
.text img {
  width: 100% !important;
  margin: 0.2rem 0 !important;
}
</style>
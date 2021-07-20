<template>
  <div>
    <m-child-banner/>
    <div class="m">
      <van-list
      >
        <van-cell v-for="item in news.list" :key="item.id" :title="item.title" @click="goNewsDetail(item.id)" />
      </van-list>
      <van-pagination
        v-model="currentPage"
        :total-items="news.total"
        :items-per-page="news.pageSize"
        @change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script>
import mChildBanner from '../../../components/content/childBanner/mChildBanner';

import { List, Cell, Pagination } from 'vant';

export default {
  components: {
    mChildBanner,
    [List.name]: List,
    [Cell.name]: Cell,
    [Pagination.name]: Pagination
  },
  props: {
    news: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data () {
    return {
      currentPage: 1,  
    }
  },
  methods: {
    handleCurrentChange(val) {
      this.$emit('handleCurrentChange', val)
    },
    goNewsDetail(id) {
      this.$emit('goNewsDetail', id)
    }
  }
}
</script>

<style lang="less" scoped>
/deep/ .van-pagination {
  padding: 0.5rem 0;
}
</style>
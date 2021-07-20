<template>
  <div>
    <pc-news
      v-if="$store.state.isMobile"
      :news="news"
      @handleCurrentChange="getNewsContent"
      @goNewsDetail="goNewsDetail"
    />
    <m-news
      v-else
      :news="news"
      @handleCurrentChange="getNewsContent"
      @goNewsDetail="goNewsDetail"
    />
  </div>
</template>

<script>
import pcNews from './pc/pcNews';
import mNews from './m/mNews'

import { getNewsContent } from '../../network/news'
export default {
  components: {
    pcNews,
    mNews
  },
  data () {
    return {
      childBanner: {
        name: '新闻资讯',
        translation: 'NEWS',
        annotation: '公司动态 行业新闻 新鲜资讯',
        type: 'news'
      },
      breadCrumb: [
        {
          name: '首页',
          path: '/home'
        },
        {
          name: '新闻资讯',
        }
      ],
      news: {}
    }
  },
  activated() {
    this.getNewsContent(1,8);
    this.$store.commit('updateChildBanner', this.childBanner);
    this.$store.commit('updateBreadCrumb', this.breadCrumb);
  },
  methods: {
    getNewsContent(page, size) {
      getNewsContent(page, size).then(res => {
        this.news = res.data;
      })
    },
    goNewsDetail(id) {
      this.$router.push({
        path: 'contentDetail',
        query: {
          type: 'news',
          newsId: id
        }
      })
    }
  }
}
</script>

<style>

</style>
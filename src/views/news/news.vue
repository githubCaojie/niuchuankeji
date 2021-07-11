<template>
  <div>
    <pc-news
      :bannerContent="bannerContent"
      :news="news"
      @handleCurrentChange="getNewsContent"
    />
  </div>
</template>

<script>
import pcNews from './pc/pcNews';

import { getNewsContent } from '../../network/news'
export default {
  components: {
    pcNews
  },
  data () {
    return {
      bannerContent: {
        name: '新闻资讯',
        translation: 'NEWS',
        annotation: '公司动态 行业新闻 新鲜资讯',
        type: 'news'
      },
      news: {}
    }
  },
  created() {
    this.getNewsContent(1,8)
  },
  methods: {
    getNewsContent(page, size) {
      getNewsContent(page, size).then(res => {
        this.news = res.data;
      })
    },
  }
}
</script>

<style>

</style>
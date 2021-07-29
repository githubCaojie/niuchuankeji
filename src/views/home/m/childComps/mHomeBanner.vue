<template>
  <div class="benner">
    <van-swipe :autoplay="300000" indicator-color="white">
      <van-swipe-item v-for="item in banners" :key="item.id">
        <a @click.prevent="bannerClick(item)">
          <p class="img">
            <van-image width="100%" height="4.5rem" fit="cover" :src="item.image"/>
          </p>
        </a>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem, Image as VanImage } from 'vant';

export default {
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [VanImage.name]: VanImage
  },
  data () {
    return {
    }
  },
  methods: {
    bannerClick(item) {
      if(item.urlpath == '' || item.urlpath == null) {
        localStorage.setItem('bannerArticle',item.article)
        let routeUrl = this.$router.resolve({
          path: 'contentDetail',
          query: {
            type: 'none',
          }
        })
        window.open(routeUrl.href, '_blank')
      }else {
        window.open(item.urlpath)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.benner {
  margin-top: 1.2rem;
}
</style>
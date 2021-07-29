<template>
  <div class="banner">
    <el-carousel width="100%" class="hidden-xs hidden-sm" :height="imgHeight+ 'px'">
      <el-carousel-item v-for="item in banners" :key="item.id" width="100%">
        <div @click="bannerClick(item)" class="item">
          <el-image :style="{height: imgHeight+'px',width: '100%'}" fit="cover" :src="item.image"></el-image>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data () {
    return {
      imgHeight: "",
    }
  },
  methods: {
    imgLoad() {
      this.imgHeight = parseInt(document.body.clientWidth*0.45);
    },
    bannerClick(item) {
      this.$store.commit('updateChildBanner', this.childBanner);
      this.$store.commit('updateBreadCrumb', this.breadCrumb);
      if(item.urlpath == '' || item.urlpath == null) {
        localStorage.setItem('bannerArticle',item.article)
        let routeUrl = this.$router.resolve({
          path: 'contentDetail',
          query: {
            type: 'none'
          }
        })
        window.open(routeUrl.href, '_blank')
      }else {
        window.open(item.urlpath)
      }
    }
  },
  mounted() {
    this.imgLoad()
    window.addEventListener("resize", () => {
      this.imgLoad()
    })
  }
}
</script>

<style lang="less" scoped>
.item {
  cursor: pointer;
}
</style>
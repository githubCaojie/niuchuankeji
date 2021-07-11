<template>
  <div class="banner">
    <el-carousel width="100%" class="hidden-xs hidden-sm" :height="imgHeight+ 'px'">
      <el-carousel-item v-for="item in banners" :key="item.id" width="100%">
        <a @click.prevent="bannerClick(item.urlpath)">
          <el-image :style="{height: imgHeight+'px',width: '100%'}" fit="cover" :src="item.image"></el-image>
        </a>
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
    bannerClick(url) {
      console.log(url)
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
</style>
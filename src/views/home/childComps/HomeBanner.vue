<template>
  <div class="banner">
    <el-carousel width="100%" class="pc hidden-xs hidden-sm" :height="imgHeight+ 'px'">
      <el-carousel-item v-for="item in banners" :key="item.id" width="100%">
        <a @click.prevent="bannerClick(item.urlpath)">
          <el-image :style="{height: imgHeight+'px',width: '100%'}" fit="cover" :src="item.image"></el-image>
        </a>
      </el-carousel-item>
    </el-carousel>
    <van-swipe class="m hidden-md hidden-lg" :autoplay="3000" indicator-color="white" :height="imgHeight+'px'">
      <van-swipe-item v-for="item in banners" :key="item.id">
        <a @click.prevent="bannerClick(item.urlpath)">
          <van-image width="100%" fit="cover" :src="item.image"/>
        </a>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem, Image as VanImage } from 'vant';
export default {
  name: "HomeBanner",
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [VanImage.name]: VanImage
  },
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
  /deep/ .van-swipe-item {
    font-size: 0;
  }
  .m {
    margin-top: 1.44rem;
  }
</style>
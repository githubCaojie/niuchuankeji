<template>
  <div class="banner">
    <el-carousel :height="bannerHeight + 'px'">
      <el-carousel-item v-for="item in 2" :key="item">
        <el-image ref="bannerImg" class="banner-img" src="https://www-file.huawei.com/-/media/corp2020/home/banner/4/mate40-series.jpg" alt=""></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bannerHeight: 0,
    }
  },
  mounted () {
    if(this.bannerHeight === 0) {
      setTimeout(() => {
        this.getBannerHeaght()
      },100);
    }
    this.$nextTick(function(){
      window.onresize = () => {
        this.getBannerHeaght()
      }
    })
  },
  methods: {
    getBannerHeaght() {
      this.bannerHeight = this.$refs.bannerImg[0].$el.clientHeight;
    }
  }
}
</script>

<style lang="less" scoped>
.banner {
  .banner-img::before {
    height: 200px;
    width: 100%;
    content: "";
    background: linear-gradient(rgba(0,0,0,0) 0%,rgba(0,0,0,0.25) 100%);
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
</style>
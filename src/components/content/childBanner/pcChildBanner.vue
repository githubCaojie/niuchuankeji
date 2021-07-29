<template>
  <div class="banner" :class="this.$store.state.childBanner.type">
    <div class="banner-content">
      <p class="title">{{this.$store.state.childBanner.name}}</p>
      <p class="annotation">{{this.$store.state.childBanner.translation}}</p>
      <p class="describe">{{this.$store.state.childBanner.annotation}}</p>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
.product {
  background-image: url('../../../assets/img/productCenterBanner.jpg');
}
.cases {
  background-image: url('../../../assets/img/successfulCasesBanner.jpg');
}
.news {
  background-image: url('../../../assets/img/newsBanner.jpg');
}
.cooperate {
  background-image: url('../../../assets/img/cooperateBanner.jpg');
}
.none {
  background-image: url('../../../assets/img/newsBanner.jpg');
}
.about {
  background-image: url('../../../assets/img/aboutUsBanner.jpg');
}
.recruitments {
  background-image: url('../../../assets/img/recruitingBanner.jpg');
}
.solution {
  background-image: url('../../../assets/img/soluTionBanner.jpg');
}

.banner {
  position: relative;
  height: 500px;
  background-size: 100% 100%;
  background-position: center center;
  background-repeat: no-repeat;
  .banner-content {
    position: absolute;
    text-align: center;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    font-size: 24px;
    color: #fff;
    .title {
      font-size: 48px;
      line-height: 70px;
    }
    .annotation {
      margin-bottom: 30px;
    }
  }
}
</style>  
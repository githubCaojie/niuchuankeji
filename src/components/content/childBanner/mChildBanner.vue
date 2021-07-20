<template>
    <div
      class="childBanner"
      :class="this.$store.state.childBanner.type"
    >
      {{this.$store.state.childBanner.name}}
    </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.childBanner{
  margin-top: 1.2rem;
  height: 3.5rem;
  background-size: 100% 100%;
  background-position: center center;
  background-repeat: no-repeat;
  color: #ffffff;
  text-align: center;
  line-height: 3.5rem;
  font-size: 0.8rem;
}
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
.about {
  background-image: url('../../../assets/img/aboutUsBanner.jpg');
}
.recruitments {
  background-image: url('../../../assets/img/recruitingBanner.jpg');
}
.solution {
  background-image: url('../../../assets/img/soluTionBanner.jpg');
}
</style>
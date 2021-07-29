<template>
  <div>
    <pc-home-banner :banners="banners"/>
    <pc-home-product :product="product"/>
    <pc-home-cases :cases="cases"/>
    <pc-home-news :news="news"/>
    <pc-home-about :company="company"/>
    <pc-home-cooperation :partner="partner" :copperation="copperation"/>
  </div>
</template>

<script>
import pcHomeBanner from './childComps/pcHomeBanner';
import pcHomeProduct from './childComps/pcHomeProduct';
import pcHomeCases from './childComps/pcHomeCases'
import pcHomeNews from './childComps/pcHomeNews';
import pcHomeAbout from './childComps/pcHomeAbout';
import pcHomeCooperation from './childComps/pcHomeCooperation'

export default {
  name: 'Home',
  components: {
    pcHomeBanner,
    pcHomeProduct,
    pcHomeCases,
    pcHomeNews,
    pcHomeAbout,
    pcHomeCooperation
  },
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    },
    product: {
      type: Array,
      default() {
        return []
      }
    },
    cases: {
      type: Array,
      default() {
        return []
      }
    },
    news: {
      type: Array,
      default() {
        return []
      }
    },
    company: {
      type: Object,
      default() {
        return {}
      }
    },
    partner: {
      type: Array,
      default() {
        return []
      }
    },
    copperation: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="less" scoped>
</style>
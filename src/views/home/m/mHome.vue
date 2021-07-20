<template>
  <div>
    <m-home-banner :banners="banners"/>
    <m-home-product :product="product"/>
    <m-home-cases :cases="cases"/>
    <m-home-news :news="news"/>
    <m-home-about :company="company"/>
    <m-home-cooperation :partner="partner" :copperation="copperation"/>
  </div>
</template>

<script>
import mHomeBanner from './childComps/mHomeBanner';
import mHomeProduct from './childComps/mHomeProduct';
import mHomeCases from './childComps/mHomeCases'
import mHomeNews from './childComps/mHomeNews';
import mHomeAbout from './childComps/mHomeAbout';
import mHomeCooperation from './childComps/mHomeCooperation'

export default {
  components: {
    mHomeBanner,
    mHomeProduct,
    mHomeCases,
    mHomeNews,
    mHomeAbout,
    mHomeCooperation
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

<style>

</style>
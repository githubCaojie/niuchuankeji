<template>
  <div>
    <m-home-banner :banners="banners"/>
    <m-home-product :product="product"/>
    <m-home-cases :cases="cases"/>
    <m-home-news :news="news"/>
    <m-home-about/>
    <m-home-cooperation :copperation="copperation"/>
  </div>
</template>

<script>
import mHomeBanner from './childComps/mHomeBanner';
import mHomeProduct from './childComps/mHomeProduct';
import mHomeCases from './childComps/mHomeCases'
import mHomeNews from './childComps/mHomeNews';
import mHomeAbout from './childComps/mHomeAbout';
import mHomeCooperation from './childComps/mHomeCooperation'

import { getHomeBanner, getHomeProduct, getHomeCases, getHomeNews, getCopperation } from '../../../network/home';

export default {
  components: {
    mHomeBanner,
    mHomeProduct,
    mHomeCases,
    mHomeNews,
    mHomeAbout,
    mHomeCooperation
  },
  data () {
    return {
      banners: [],
      product: [],
      cases: [],
      news: [],
      copperation: []
    }
  },
  created() {
    // 请求数据
    this.getHomeBanner();
    this.getHomeProduct();
    this.getHomeCases();
    this.getHomeNews();
    this.getCopperation()
  },
  methods: {
    getHomeBanner () {
      getHomeBanner().then(res => {
        this.banners = res.data;
      })
    },
    getHomeProduct() {
      getHomeProduct().then(res => {
        this.product = res.data.list
      })
    },
    getHomeCases() {
      getHomeCases().then(res => {
        this.cases = res.data.list;
      })
    },
    getHomeNews() {
      getHomeNews().then(res => {
        this.news = res.data.list;
      })
    },
    getCopperation() {
      getCopperation().then(res => {
        console.log(res.data)
        this.copperation = res.data;
      })
    }
  }
}
</script>

<style>

</style>
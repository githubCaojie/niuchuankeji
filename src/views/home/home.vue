<template>
  <div>
    <home-banner :banners="banners"/>
    <home-product :product="product"/>
    <home-cases :cases="cases"/>
    <home-news :news="news"/>
    <home-about/>
    <home-cooperation :copperation="copperation"/>
  </div>
</template>

<script>
import HomeBanner from './childComps/HomeBanner';
import HomeProduct from './childComps/HomeProduct';
import HomeCases from './childComps/HomeCases'
import HomeNews from './childComps/HomeNews';
import HomeAbout from './childComps/HomeAbout';
import HomeCooperation from './childComps/HomeCooperation'

import { getHomeBanner, getHomeProduct, getHomeCases, getHomeNews, getCopperation } from '../../network/home';

export default {
  name: 'Home',
  components: {
    HomeBanner,
    HomeProduct,
    HomeCases,
    HomeNews,
    HomeAbout,
    HomeCooperation
  },
  data() {
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

<style lang="less" scoped>
</style>
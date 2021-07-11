<template>
  <div>
    <pc-home
      v-if="$store.state.isMobile"
      :banners="banners"
      :product="product"
      :cases="cases"
      :news="news"
      :company="company"
      :copperation="copperation"
    />
    <m-home
      v-else
      :banners="banners"
      :product="product"
      :cases="cases"
      :news="news"
      :company="company"
      :copperation="copperation"
    />
  </div>
</template>

<script>
import pcHome from './pc/pcHome';
import mHome from './m/mHome'

import { getHomeBanner, getHomeProduct, getHomeCases, getHomeNews, getCompany, getCopperation } from '../../network/home';

export default {
  components: {
    pcHome,
    mHome,
  },
  data () {
    return {
      banners: [],
      product: [],
      cases: [],
      news: [],
      company: {},
      copperation: []
    }
  },
  created() {
    this.getHomeBanner();
    this.getHomeProduct();
    this.getHomeCases();
    this.getHomeNews();
    this.getCompany();
    this.getCopperation();
  },
  methods: {
    getHomeBanner () {
      getHomeBanner().then(res => {
        this.banners = res.data;
      })
    },
    getHomeProduct() {
      getHomeProduct().then(res => {
        this.product = res.data.splice(0,4)
      })
    },
    getHomeCases() {
      getHomeCases().then(res => {
        this.cases = res.data.list;
      })
    },
    getHomeNews() {
      getHomeNews().then(res => {
        this.news = res.data.splice(0,3);
      })
    },
    getCompany() {
      getCompany().then(res => {
        console.log(res)
        this.company = res.data[0];
      })
    },
    getCopperation() {
      getCopperation().then(res => {
        this.copperation = res.data;
      })
    }
  }
}
</script>

<style>

</style>
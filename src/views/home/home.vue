<template>
  <div>
    <pc-home
      v-if="$store.state.isMobile"
      :banners="banners"
      :product="product"
      :cases="cases"
      :news="news"
      :company="company"
      :partner="partner"
      :copperation="copperation"
    />
    <m-home
      v-else
      :banners="banners"
      :product="product"
      :cases="cases"
      :news="news"
      :company="company"
      :partner="partner"
      :copperation="copperation"
    />
  </div>
</template>

<script>
import pcHome from './pc/pcHome';
import mHome from './m/mHome'

import { getHomeBanner, getHomeProduct, getHomeCases, getHomeNews, getCompany, getPartner } from '../../network/home';
import { getEcologicalCooperation } from '../../network/cooperation'

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
      partner: [],
      copperation: []
    }
  },
  created() {
    this.getHomeBanner();
    this.getHomeProduct();
    this.getHomeCases();
    this.getHomeNews();
    this.getCompany();
    this.getPartner();
    this.getEcologicalCooperation();
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
        this.company = res.data[0];
      })
    },
    getPartner() {
      getPartner().then(res => {
        this.partner = res.data;
      })
    },
    getEcologicalCooperation() {
      getEcologicalCooperation().then(res => {
        this.copperation = res.data
      })
    }
  }
}
</script>

<style>

</style>
<template>
  <div id="app">
    <nc-header :navData="navData"/>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <nc-footer
      :contact="contact"
      :hotProduct="hotProduct"
      :hotSolution="hotSolution"
    />
  </div>
</template>

<script>
  import NcHeader from '@/components/common/header/Header';
  import NcFooter from '@/components/common/footer/Footer';
  import { getNav, getCompanyContact, getHotProduct, getHotSolution } from './network/public';

  export default {
    name: 'App',
    components: {
      NcHeader,
      NcFooter
    },
    data() {
      return {
        navData: [],
        contact: {},
        hotProduct: [],
        hotSolution: []
      }
    },
    mounted () {
      if(this.isMobile()) {
        this.$store.commit('judgeIsMobile', false)
      }else {
        this.$store.commit('judgeIsMobile', true)
      }
      this.getNav();
      this.getCompanyContact();
      this.getHotProduct();
      this.getHotSolution();
    },
    methods: {
      isMobile() {
        let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
        return flag;
      },
      getNav() {
        getNav().then(res => {
          this.navData = res.data;
        })
      },
      getCompanyContact() {
        getCompanyContact().then(res => {
          this.contact = res.data[0];
        })
      },
      getHotProduct() {
        getHotProduct().then(res => {
          this.hotProduct = res.data
        })
      },
      getHotSolution() {
        getHotSolution().then(res => {
          this.hotSolution = res.data
        })
      }
    }
  }
</script>
<style lang="less">
  @import "assets/css/base.css";
</style>

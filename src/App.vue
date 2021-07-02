<template>
  <div id="app">
    <nc-header :navData="navData"/>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <nc-footer/>
  </div>
</template>

<script>
  import NcHeader from '@/components/common/header/Header';
  import NcFooter from '@/components/common/footer/Footer';
  import {getNav} from './network/public';

  export default {
    name: 'App',
    components: {
      NcHeader,
      NcFooter
    },
    data() {
      return {
        navData: []
      }
    },
    mounted () {
      this.getNav()
    },
    methods: {
      getNav() {
        getNav().then(res => {
          this.navData = res.data
        })
      }
    }
  }
</script>
<style lang="less">
  @import "assets/css/base.css";
</style>

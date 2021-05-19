<template>
  <div id="app">
    <nc-header></nc-header>
    <router-view/>
    <m-footer/>
    <pc-footer/>
  </div>
</template>

<script>
  import NcHeader from '@/components/content/header/Header';

  
  import PcFooter from '@/components/content/footer/PcFooter';

  import MFooter from '@/components/content/footer/MFooter';

  export default {
    components: {
      NcHeader,
      PcFooter,
      MFooter
    },
    mounted () {
    },
    methods: {
    }
  }
</script>
<style lang="less">
  @import "assets/css/base.css";
</style>

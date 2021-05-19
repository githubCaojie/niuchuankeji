<template>
  <div>
    <m-home-banner v-if="$store.state.isMobile"/>
    <pc-home-banner v-else/>
  </div>
</template>

<script>
import PcHomeBanner from './childComps/PcHomeBanner';
import MHomeBanner from './childComps/MHomeBanner';

export default {
  name: 'Home',
  components: {
    PcHomeBanner,
    MHomeBanner
  }
}
</script>

<style lang="less" scoped>
</style>
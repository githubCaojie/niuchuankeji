<template>
  <div>
    <pc-cases
      :bannerContent="bannerContent"
      :cases="cases"
      v-if="$store.state.isMobile"
      @handleCurrentChange="getSuccessfulCases"
    />
    <m-cases
      :bannerContent="bannerContent"
      :cases="cases"
      v-else
    />
  </div>
</template>

<script>
import pcCases from './pc/pcCases';
import mCases from './m/mCases';

import { getSuccessfulCases } from '../../network/cases';

export default {
  components: {
    pcCases,
    mCases,
  },
  data () {
    return {
      bannerContent: {
        name: '成功案例',
        translation: 'SUCCESSFUL CASES',
        annotation: '丰富的产品终端，专业安全的解决方案',
        type: 'cases'
      },
      cases: {}
    }
  },
  created() {
    this.getSuccessfulCases(1,8)
  },
  methods: {
    getSuccessfulCases(page,size) {
      getSuccessfulCases(page,size).then(res => {
        this.cases = res.data
      })
    }
  }
}
</script>

<style>


</style>
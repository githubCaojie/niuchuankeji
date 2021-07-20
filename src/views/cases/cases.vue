<template>
  <div>
    <pc-cases
      v-if="$store.state.isMobile"
      :cases="cases"
      @handleCurrentChange="getSuccessfulCases"
      @goCasesDetail="goCasesDetail"
    />
    <m-cases
      v-else
      :cases="cases"
      @handleCurrentChange="getSuccessfulCases"
      @goCasesDetail="goCasesDetail"
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
      childBanner: {
        name: '成功案例',
        translation: 'SUCCESSFUL CASES',
        annotation: '丰富的产品终端，专业安全的解决方案',
        type: 'cases'
      },
      breadCrumb: [
        {
          name: '首页',
          path: '/home'
        },
        {
          name: '成功案例',
        }
      ],
      cases: {}
    }
  },
  activated() {
    this.getSuccessfulCases(1,8)
    this.$store.commit('updateChildBanner', this.childBanner);
    this.$store.commit('updateBreadCrumb', this.breadCrumb);
  },
  methods: {
    getSuccessfulCases(page,size) {
      getSuccessfulCases(page,size).then(res => {
        this.cases = res.data
      })
    },
    goCasesDetail(id) {
      this.$router.push({
        path: 'contentDetail',
        query: {
          type: 'cases',
          casesId: id
        }
      })
    }
  }
}
</script>

<style>


</style>
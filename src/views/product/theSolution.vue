<template>
  <div>
    <pc-the-solution
      v-if="this.$store.state.isMobile"
      :solutionCentent="solutionCentent"
      @goSolutionDetail="goSolutionDetail"
    />
    <m-the-solution
      v-else
      :solutionCentent="solutionCentent"
      @goSolutionDetail="goSolutionDetail"
    />
  </div>
</template>

<script>
import pcTheSolution from './pc/pcTheSolution.vue';
import mTheSolution from './m/mTheSolution.vue'

import { getTheSolutionContent } from '../../network/product';

export default {
  components: {
    pcTheSolution,
    mTheSolution
  },
  data () {
    return {     
      childBanner: {
        name: '解决方案',
        translation: 'SOLUTION',
        annotation: '丰富的产品终端，专业安全的解决方案',
        type: 'solution'
      },
      breadCrumb: [
        {
          name: '首页',
          path: '/home'
        },
        {
          name: '产品方案',
        },
        {
          name: '解决方案',
        }
      ],
      solutionCentent: []
    }
  },
  activated() {
    this.getTheSolutionContent();
    this.$store.commit('updateChildBanner', this.childBanner);
    this.$store.commit('updateBreadCrumb', this.breadCrumb);
  },
  methods: {
    getTheSolutionContent() {
      getTheSolutionContent().then(res => {
        this.solutionCentent = res.data.list
      })
    },
    goSolutionDetail(id) {
      let routeUrl = this.$router.resolve({
        path: 'contentDetail',
        query: {
          type: 'solution',
          id: id
        }
      })
      window.open(routeUrl.href, '_blank')
    }
  }
}
</script>

<style>

</style>
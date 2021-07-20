<template>
  <div>
    <pc-recruitments
      v-if="$store.state.isMobile"
      :recruit="recruit"
      @handleCurrentChange="getRecruit"
    />
    <m-recruitments
      v-else
      :recruit="recruit"
      @handleCurrentChange="getRecruit"
    />
  </div>
</template>

<script>
import pcRecruitments from "./pc/pcRecruitments";
import mRecruitments from './m/mRecruitments.vue'

import { getRecruit } from '../../network/public'

export default {
  components: {
    pcRecruitments,
    mRecruitments
  },
  data () {
    return {
      childBanner: {
        name: '招贤纳士',
        translation: 'ABOUT US',
        annotation: '加入纽川 更多机遇 更多精彩',
        type: 'recruitments'
      },
      breadCrumb: [
        {
          name: '首页',
          path: '/home'
        },
        {
          name: '关于纽川',
        },
        {
          name: '招贤纳士',
        }
      ],
      recruit: {},
    }
  },
  created() {
    this.$store.commit('updateChildBanner', this.childBanner);
    this.$store.commit('updateBreadCrumb', this.breadCrumb);
    this.getRecruit(1,8)
  },
  methods: {
    getRecruit(page) {
      getRecruit(page).then(res => {
        this.recruit = res.data
      })
    }
  }
}
</script>

<style>

</style>
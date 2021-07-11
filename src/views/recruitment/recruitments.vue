<template>
  <div>
    <pc-recruitments
      :bannerContent="bannerContent"
      :recruit="recruit"
      :breadCrumb="breadCrumb"
      @handleCurrentChange="getRecruit"
    />
  </div>
</template>

<script>
import pcRecruitments from "./pc/pcRecruitments";

import { getRecruit } from '../../network/public'

export default {
  components: {
    pcRecruitments
  },
  data () {
    return {
      bannerContent: {
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
          path: ''
        },
        {
          name: '招贤纳士',
          path: '/recruitments'
        }
      ],
      recruit: {}
    }
  },
  created() {
    this.getRecruit(1,8)
  },
  methods: {
    getRecruit(page) {
      getRecruit(page).then(res => {
        this.recruit = res.data
        console.log(this.recruit)
      })
    }
  }
}
</script>

<style>

</style>

<template>
  <div>
    <pc-cooperation-detail
      :bannerContent="bannerContent"
      :breadCrumb="breadCrumb"
      :detail="detail"
    />
  </div>
</template>

<script>
import pcCooperationDetail from './pc/pcCooperationDetail';

import { getCooperteDetail } from '../../network/contentDetail';

export default {
  components: {
    pcCooperationDetail,
  },
  data () {
    return {
      bannerContent: {
        name: '生态合作',
        translation: 'COOPERATE',
        annotation: '诚邀合作伙伴共筑生态合作体系',
        type: 'cooperate'
      },
      breadCrumb: [
        {
          name: '首页',
          path: '/home'
        },
        {
          name: '产品方案',
          path: ''
        },
        {
          name: '解决方案',
          path: '/theSolution'
        }
      ],
      detail: [],
    }
  },
  created() {
    this.getCooperteDetail(this.$route.query.id)
  },
  methods: {
    getCooperteDetail(id) {
      getCooperteDetail(id).then(res => {
        this.detail = res.data;
      })
    }
  }
}
</script>

<style>

</style>
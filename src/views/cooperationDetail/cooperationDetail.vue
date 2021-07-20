
<template>
  <div>
    <pc-cooperation-detail
      v-if="this.$store.state.isMobile"
      :detail="detail"
    />
    <m-cooperation-detail
      v-else
      :detail="detail"
    />
  </div>
</template>

<script>
import pcCooperationDetail from './pc/pcCooperationDetail';
import mCooperationDetail from './m/mCooperationDetail.vue'

import { getCooperteDetail } from '../../network/contentDetail';

export default {
  components: {
    pcCooperationDetail,
    mCooperationDetail
  },
  data () {
    return {
      childBanner: {
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
          name: '生态合作',
          path: '/cooperation'
        },
        {
          name: '合作生态展示',
        }
      ],
      detail: [],
    }
  },
  activated() {
    this.getCooperteDetail(this.$route.query.id);
    this.$store.commit('updateChildBanner', this.childBanner);
    this.$store.commit('updateBreadCrumb', this.breadCrumb);
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
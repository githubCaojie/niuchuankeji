<template>
  <div>
    <pc-cooperation
      :bannerContent="bannerContent"
      :cooperation="cooperation"
      :partner="partner"
      @goCooperationDeyail="goCooperationDeyail"
    />
  </div>
</template>

<script>
import pcCooperation from './pc/pcCooperation';

import { getEcologicalCooperation } from '../../network/cooperation';
import { getCopperation } from '../../network/home';

export default {
  components: {
    pcCooperation
  },
  data () {
    return {
      bannerContent: {
        name: '生态合作',
        translation: 'COOPERATE',
        annotation: '诚邀合作伙伴共筑生态合作体系',
        type: 'cooperate'
      },
      cooperation: [],
      partner: []
    }
  },
  created() {
    this.getEcologicalCooperation();
    this.getCopperation();
  },
  methods: {
    getEcologicalCooperation() {
      getEcologicalCooperation().then(res => {
        this.cooperation = res.data
      })
    },
    getCopperation() {
      getCopperation().then(res => {
        this.partner = res.data;
      })
    },
    goCooperationDeyail(id) {
      this.$router.push({
        path: 'cooperationDetail',
        query: {
          id: id
        }
      })
    }
  }
}
</script>

<style>

</style>
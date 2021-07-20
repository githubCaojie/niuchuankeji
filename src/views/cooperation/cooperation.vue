<template>
  <div>
    <pc-cooperation
      v-if="$store.state.isMobile"
      :company="company"
      :cooperation="cooperation"
      :partner="partner"
      @goCooperationDeyail="goCooperationDeyail"
    />
    <m-cooperation
      v-else
      :company="company"
      :cooperation="cooperation"
      :partner="partner"
      @goCooperationDeyail="goCooperationDeyail"
    />
  </div>
</template>

<script>
import pcCooperation from './pc/pcCooperation';
import MCooperation from './m/mCooperation';

import { getEcologicalCooperation } from '../../network/cooperation';
import { getPartner, getCompany } from '../../network/home';

export default {
  components: {
    pcCooperation,
    MCooperation,
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
        }
      ],
      company: "",
      cooperation: [],
      partner: []
    }
  },
  activated() {
    this.getCompany();
    this.getEcologicalCooperation();
    this.getPartner();
    this.$store.commit('updateChildBanner', this.childBanner);
    this.$store.commit('updateBreadCrumb', this.breadCrumb);
  },
  methods: {
    getCompany() {
      getCompany().then(res => {
        this.company = res.data[0].companyProfile
      })
    },
    getEcologicalCooperation() {
      getEcologicalCooperation().then(res => {
        this.cooperation = res.data
      })
    },
    getPartner() {
      getPartner().then(res => {
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
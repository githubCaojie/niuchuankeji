<template>
  <div>
    <pc-about
      v-if="$store.state.isMobile"
      :company="company"
      :development="development"
      :honor="honor"
      :contact="contact"
    />
    <m-about
      v-else
      :company="company"
      :development="development"
      :honor="honor"
      :contact="contact"
    />
  </div>
</template>

<script>
import pcAbout from './pc/pcAbout';
import mAbout from './m/mAbout.vue'

import { getAboutCompany, getAboutCompanyContact, getAboutDevelopment, getAboutHonor } from '../../network/about'

export default {
  components: {
    pcAbout,
    mAbout
  },
  data () {
    return {
      childBanner: {
        name: '关于纽川',
        translation: 'ABOUT US',
        annotation: '诚信 务实 高效 共赢',
        type: 'about'
      },
      breadCrumb: [
        {
          name: '首页',
          path: '/home'
        },
        {
          name: '关于纽川',
        }
      ],
      company: {},
      development: [],
      honor: [],
      contact: {}
    }
  },
  activated() {
    this.getAboutCompany();
    this.getAboutDevelopment();
    this.getAboutHonor();
    this.getAboutCompanyContact();
    this.$store.commit('updateChildBanner', this.childBanner);
    this.$store.commit('updateBreadCrumb', this.breadCrumb);
  },
  methods: {
    getAboutCompany() {
      getAboutCompany().then(res => {
        this.company = res.data[0];
      })
    },
    getAboutCompanyContact() {
      getAboutCompanyContact().then(res => {
        this.contact = res.data[0]
      })
    },
    getAboutDevelopment() {
      getAboutDevelopment().then(res => {
        this.development = res.data;
      })
    },
    getAboutHonor() {
      getAboutHonor().then(res => {
        this.honor = res.data;
      })
    }
  }
}
</script>

<style>

</style>
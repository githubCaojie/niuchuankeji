<template>
  <div>
    <pc-about
      :bannerContent="bannerContent"
      :company="company"
      :development="development"
      :honor="honor"
      :contact="contact"
      :type="type"
    />
  </div>
</template>

<script>
import pcAbout from './pc/pcAbout';

import { getAboutCompany, getAboutCompanyContact, getAboutDevelopment, getAboutHonor } from '../../network/about'

export default {
  components: {
    pcAbout
  },
  data () {
    return {
      bannerContent: {
        name: '关于纽川',
        translation: 'ABOUT US',
        annotation: '诚信 务实 高效 共赢',
        type: 'about'
      },
      company: {},
      development: [],
      honor: [],
      contact: {},
      type: this.$route.query.type,
    }
  },
  created() {
    this.getAboutCompany();
    this.getAboutDevelopment();
    this.getAboutHonor();
    this.getAboutCompanyContact()
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
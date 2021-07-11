<template>
<div>
  <pc-content-detail
    :bannerContent="bannerContent"
    :breadCrumb="breadCrumb"
    :detail="detail"
  />
</div>
</template>

<script>
import pcContentDetail from './pc/pcContentDetail.vue';
import { getSuccessfulCasesDetail, getNewsInformationDeatil } from '../../network/contentDetail'

export default {
  components: {
    pcContentDetail
  },
  data () {
    return {
      bannerContent: {
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
          path: ''
        }
      ],
      detail: []
    }
  },
  created() {
    console.log(212121)
    let type = this.$route.query.type;
    console.log(type)
    if(type === 'cases') {
      this.getSuccessfulCasesDetail(this.$route.query.casesId)
    }
    if(type === 'news') {
      this.getNewsInformationDeatil(this.$route.query.newsId)
    }
  },
  methods: {
    getSuccessfulCasesDetail(id) {
      getSuccessfulCasesDetail(id).then(res => {
        this.detail = res.data;
        let newBreadCrumb = {
          name: this.detail[0].successfulCasesName
        }
        this.breadCrumb.push(newBreadCrumb)
      })
    },
    getNewsInformationDeatil(id) {
      getNewsInformationDeatil(id).then(res => {
        this.detail = res.data;
      })
    }
  }
}
</script>

<style>

</style>
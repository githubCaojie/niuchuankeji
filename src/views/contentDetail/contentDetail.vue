<template>
  <div>
    <pc-content-detail
      v-if="this.$store.state.isMobile"
      :detail="detail"
    />
    <m-content-detail
      v-else
      :detail="detail"
    />
  </div>
</template>

<script>
import pcContentDetail from './pc/pcContentDetail.vue';
import mContentDetail from './m/mContentDetail.vue'

import { getSuccessfulCasesDetail, getNewsInformationDeatil, getProductDetailed, getTheSolutionDetailed } from '../../network/contentDetail'

export default {
  components: {
    pcContentDetail,
    mContentDetail
  },
  data () {
    return {
      childBannerList: {
        cases: {
          name: '成功案例',
          translation: 'SUCCESSFUL CASES',
          annotation: '丰富的产品终端，专业安全的解决方案',
          type: 'cases'
        },
        news: {
          name: '新闻资讯',
          translation: 'NEWS',
          annotation: '公司动态 行业新闻 新鲜资讯',
          type: 'news'
        },
        product: {
          name: '产品中心',
          translation: 'PRODUCT',
          annotation: '丰富的产品终端，专业安全的解决方案',
          type: 'product'
          },
        solution: {
          name: '解决方案',
          translation: 'SOLUTION',
          annotation: '丰富的产品终端，专业安全的解决方案',
          type: 'solution'
        }
      },
      breadCrumbList: {
        cases: [
          {
            name: '首页',
            path: '/home'
          },
          {
            name: '成功案例',
          }
        ],
        news: [
          {
            name: '首页',
            path: '/home'
          },
          {
            name: '新闻资讯',
          }
        ],
        product: [
          {
            name: '首页',
            path: '/home'
          },
          {
            name: '产品方案',
          },
          {
            name: '产品中心',
            path: '/productCenter'
          },
          {
            name: '产品详情'
          }
        ],
        solution: [
          {
            name: '首页',
            path: '/home'
          },
          {
            name: '产品方案',
          },
          {
            name: '解决方案',
            path: '/theSolution'
          },
          {
            name: '方案详情'
          }
        ],
      },
      detail: []
    }
  },
  activated() {
    let type = this.$route.query.type;
    this.$store.commit('updateChildBanner', this.childBannerList[type]);
    this.$store.commit('updateBreadCrumb', this.breadCrumbList[type]);
    if(type === 'cases') {
      this.getSuccessfulCasesDetail(this.$route.query.casesId)
    }
    if(type === 'news') {
      this.getNewsInformationDeatil(this.$route.query.newsId)
    }
    if(type === 'product') {
      this.getProductDetailed(this.$route.query.productId);
    }
    if(type === 'solution') {
      this.getTheSolutionDetailed(this.$route.query.id)
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
    },
    getProductDetailed(id) {
      getProductDetailed(id).then(res => {
        this.detail = res.data
      })
    },
    getTheSolutionDetailed(id) {
      getTheSolutionDetailed(id).then(res => {
        console.log(res);
        this.detail = res.data
      })
    }
  }
}
</script>

<style>

</style>
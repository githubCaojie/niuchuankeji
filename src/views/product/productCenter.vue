<template>
  <div>
    <pc-product-center
    v-if="$store.state.isMobile"
      :productCenteCentent="productCenteCentent"
      @handleCurrentChange="getProductCenterContent"
      @goProductDetail="goProductDetail"
    />
    <m-product-center
    v-else
      :productCenteCentent="productCenteCentent"
      @handleCurrentChange="getProductCenterContent"
      @goProductDetail="goProductDetail"
    />
  </div>
</template>

<script>
import pcProductCenter from './pc/pcProductCenter';
import mProductCenter from './m/mProductCenter'

import { getProductCenterContent } from '../../network/product';

export default {
  components: {
    pcProductCenter,
    mProductCenter
  },
  data () {
    return {
      childBanner: {
        name: '产品中心',
        translation: 'PRODUCT',
        annotation: '丰富的产品终端，专业安全的解决方案',
        type: 'product'
      },
      breadCrumb: [
        {
          name: '首页',
          path: '/home'
        },
        {
          name: '产品方案',
        },
        {
          name: '产品中心',
        }
      ],
      productCenteCentent: {}
    }
  },
  activated() {
    this.getProductCenterContent(1, 8);
    this.$store.commit('updateChildBanner', this.childBanner);
    this.$store.commit('updateBreadCrumb', this.breadCrumb);
  },
  methods: {
    getProductCenterContent(page, size) {
      getProductCenterContent(page, size).then(res => {
        this.productCenteCentent = res.data
      })
    },
    goProductDetail(id) {
      let routeUrl = this.$router.resolve({
        path: 'contentDetail',
        query: {
          type: 'product',
          productId: id
        }
      })
      window.open(routeUrl.href, '_blank');
    }
  }
}
</script>

<style>

</style>
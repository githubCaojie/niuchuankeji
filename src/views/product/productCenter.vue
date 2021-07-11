<template>
  <div>
    <pc-product-center
    v-if="$store.state.isMobile"
      :bannerContent="bannerContent"
      :breadCrumb="breadCrumb"
      :productCenteCentent="productCenteCentent"
      @handleCurrentChange="getProductCenterContent"
    />
    <m-product-center
    v-else
      :bannerContent="bannerContent"
      :productCenteCentent="productCenteCentent"
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
      bannerContent: {
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
  beforeCreate() {
    document.querySelector('body').setAttribute('style', 'background:#f4f4f4')
  },
  beforeDestroy() {
    document.querySelector('body').setAttribute('style', '')
  },
  created() {
    this.getProductCenterContent(1, 8)
  },
  methods: {
    getProductCenterContent(page, size) {
      getProductCenterContent(page, size).then(res => {
        this.productCenteCentent = res.data
      })
    },
  }
}
</script>

<style>

</style>
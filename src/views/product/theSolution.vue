<template>
  <div>
    <pc-the-solution
      :bannerContent="bannerContent"
      :breadCrumb="breadCrumb"
    />
  </div>
</template>

<script>
import pcTheSolution from './pc/pcTheSolution.vue';

export default {
  components: {
    pcTheSolution
  },
  data () {
    return {     
      bannerContent: {
        name: '解决方案',
        translation: 'SOLUTION',
        annotation: '丰富的产品终端，专业安全的解决方案',
        type: 'solution'
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
          name: '解决方案',
        }
      ],
    }
  }
}
</script>

<style>

</style>
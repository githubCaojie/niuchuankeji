<template>
    <div class="bread-crumbs pc">
      <img src="../../../assets/img/breadCrumbs.png"/>
      您的位置：
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item
          v-for="(item, i) in this.$store.state.breadCrumb"
          :key="i"
          :to="item.path"
        >{{item.name}}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
</template>

<script>
export default {
  props: {
    breadCrumb: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="less" scoped>
.bread-crumbs {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #d3d3d3;
  font-size: 16px;
  img {
    width: 14px;
    margin-right: 6px;
  }
  .el-breadcrumb {
    font-size: 16px;
  }
}
</style>
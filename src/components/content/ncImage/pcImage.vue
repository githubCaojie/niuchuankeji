<template>
  <div class="img"
    :style="{height: height, width: width}"
    :class="{active: active, border: isborder}"
  >
    <el-image
      :fit="fit"
      :src="src"
    />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default() {
        return ''
      }
    },
    width: {
      type: String,
      default() {
        return '100%'
      }
    },
    height: {
      type: String,
      default() {
        return '100%'
      }
    },
    active: {
      type: Boolean,
      default() {
        return false
      }
    },
    isborder: {
      type: Boolean,
      default() {
        return false
      }
    },
    fit: {
      type: String,
      default() {
        return 'cover'
      }
    }
  },
}
</script>

<style lang="less" scoped>
.img {
  font-size: 0;
  position: relative;
  .el-image {
    width: 100%;
  }
  img {
    transform: scale(1);
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
  }
}
.border {
  border: 1px solid #999999;
}
.active {
  /deep/ img {
    transform: scale(1.1) !important;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
  }
}
.el-image {
  height: 100%;
}
</style>
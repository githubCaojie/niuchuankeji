<template>
  <!-- header -->
  <div class="header-box">
    <header>
      <!-- logo -->
      <a class="logo" href="javascript:;">
        <img src="../../../assets/img/logo.png"/>
        <span>纽川技术有限公司</span>
      </a>
      <!-- 导航 -->
      <div class="pc hidden-xs hidden-sm">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          background-color="transparent"
          text-color="#ffffff"
          active-text-color="#ffffff"
          router
          @select="handleSelect"
        >
          <el-menu-item v-for="item in navData" :key="item.id" :index="item.address">{{item.name}}</el-menu-item>
        </el-menu>
      </div>
      <div class="m hidden-md hidden-lg">
        <i class="iconfont icon-toggle" v-show="!isMenuShow" @click="menuToggle(true)"></i>
        <i class="iconfont icon-guanbi" v-show="isMenuShow" @click="offPopupBox"></i>
      </div>
    </header>
    <div class="popup-box" :class="{in: isMenuShow}">
      <div v-show="isMenuShow">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item v-for="item in navData" :key="item.id" :title="item.name" />
        </van-sidebar>
      </div>
    </div>
  </div>
</template>

<script>
import { Sidebar, SidebarItem } from 'vant';

export default {
  components: {
    [Sidebar.name]: Sidebar,
    [SidebarItem.name]: SidebarItem
  },
  props: {
    navData: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data () {
    return {
      // pc-data
      activeIndex: 'home',
      // m-data
      isMenuShow: false,
      activeKey: 0
    }
  },
  methods: {
    // pc交互
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    // m交互
    menuToggle(type) {
      this.isMenuShow = type;
      this.isSearchShow = false
    },
    offPopupBox() {
      this.isMenuShow = false
    }
  }
}
</script>

<style lang="less" scoped>
.header-box {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  box-shadow: 2px 0px 10px rgba(0, 0, 0, 0.2);
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 11;
  @media (max-width: 768px) {
    header {
      margin: 0 0.27rem;
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
    header {
      margin: 0 0.27rem;
    }
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    header {
      width: 80%;
      margin: 0 auto;
    }
  }
  @media (min-width: 1200px) {
    header {
      width: 80%;
      margin: 0 auto;
    }
  }
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 1.44rem;
    .logo {
      display: flex;
      align-items: center;
      color: #ffffff;
      font-size: 0.29rem;
      img {
        width: 0.87rem;
        height: auto;
        margin-right: 0.33rem;
      }
    }
    .pc {
      display: flex;
      align-items: center;
      // 导航
      .el-menu-demo {
        width: auto;
        transition: all 0.3s;
        border-bottom: unset;
        .el-menu-item, .el-submenu {
          line-height: 1.44rem;
          height: 1.44rem;
          font-size: 0.29rem;
          // padding: 0 10px;
          /deep/ .el-submenu__title {
            line-height: 1.44rem;
            height: 1.44rem;
          }
        }
      }
    }
    .m {
      i.iconfont {
        font-size: 0.45rem;
        margin-left: 0.18rem;
        color: #fff;
      }
    }
  }
  .popup-box {
    background: #fff;
    width: 100%;
    height:calc(100vh - 67px);
    position: fixed;
    height: 1.44rem;
    z-index: 9;
    left: 100%;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    .van-sidebar {
      width: 100%;
    }
  }
  .in {
    left: 0;
  }
}
</style>
<template>
  <div class="header">
    <header v-if="$store.state.isMobile">
      <div class="pc">
        <a class="logo" href="javascript:;">
          <img src="../../../assets/img/logo.png"/>
          <span>纽川技术有限公司</span>
        </a>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          background-color="transparent"
          text-color="#ffffff"
          active-text-color="#ffffff"
          @select="handleSelect"
          router
          style="display: flex"
        >
        <ul v-for="item in navData" :key="item.id" >
          <el-menu-item :index="item.path" v-if="!item.children">
            {{item.label}}
          </el-menu-item>
          <el-submenu :index="item.path" v-else>
            <template slot="title">{{item.label}}</template>
            <el-menu-item
              v-for="childrenItem in item.children"
              :key="childrenItem.id"
              :index="childrenItem.path"
            >{{childrenItem.label}}</el-menu-item>
          </el-submenu>
        </ul>
        </el-menu>
      </div>
    </header>
    <header v-else>
      <div class="m">
        <a class="logo" href="javascript:;">
          <img src="../../../assets/img/logo.png"/>
          <span>纽川技术有限公司</span>
        </a>
        <i class="iconfont icon-toggle" v-show="!isMenuShow" @click="menuToggle(true)"></i>
        <i class="iconfont icon-guanbi" v-show="isMenuShow" @click="offPopupBox"></i>
      </div>
      <div class="popup-box" :class="{in: isMenuShow}">
        <div v-show="isMenuShow">
          <van-sidebar v-model="activeKey">
            <van-sidebar-item v-for="item in navData" :key="item.id" :title="item.name" @click="goNav(item.address)" />
          </van-sidebar>
        </div>
      </div>
    </header>
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
      activeIndex: 'home',
      isMenuShow: false,
      activeKey: 0
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
    menuToggle(type) {
      this.isMenuShow = type;
      this.isSearchShow = false
    },
    offPopupBox() {
      this.isMenuShow = false
    },
    goNav(type) {
      this.isMenuShow = false
      this.$router.push({
        path: type.substr(1)
      })
    }
  }
}
</script>

<style lang="less" scoped>
.header {
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
  header {
    .logo {
      display: flex;
      align-items: center;
      color: #ffffff;
      img {
        height: auto;
      }
    }
    .pc {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 78px;
      .logo {
        font-size: 16px;
        img {
          width: 47px;
          margin-right: 22px;
        }
      }
      // 导航
      .el-menu-demo {
        width: auto;
        transition: all 0.3s;
        border-bottom: unset;
        .el-menu-item, .el-submenu {
          line-height: 78px;
          height: 78px;
          font-size: 16px;
          // padding: 0 10px;
          /deep/ .el-submenu__title {
            line-height: 78px;
            height: 78px;
            font-size: 16px;
            .el-submenu__icon-arrow {
              right: 5px;
            }
          }
        }
      }
    }
    .m {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 1.2rem;
      .logo {
        font-size: 0.3rem;
        img {
          width: 0.8rem;
          margin-right: 0.2rem;
        }
      }
      i.iconfont {
        font-size: 0.8rem;
        margin-left: 0.18rem;
        color: #fff;
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
}
.el-menu--horizontal {
  .el-menu--popup {
    .el-menu-item {
      background-color: rgba(0, 0, 0, 0.5) !important;
    }
  }
}
</style>
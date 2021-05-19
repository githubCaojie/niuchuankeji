<template>
  <!-- header -->
  <div class="header-box">
    <header>
      <!-- logo -->
      <a class="logo" href="javascript:;">
        <van-image :src="require('../../../assets/img/logo.png')" alt="" />
      </a>
      <!-- 导航 -->
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo pc-header-box hidden-xs hidden-sm"
        mode="horizontal"
        @select="handleSelect"
        :class="{dispear: isSearch}"
      >
        <el-submenu index="1">
          <template slot="title">jiani0</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">jiani1</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3">jiani2</el-menu-item>
        <el-menu-item index="4">jiani3</el-menu-item>
      </el-menu>
      <!-- 搜索框 -->
      <div class="search  hidden-xs hidden-sm">
        <div class="search-input" v-show="isSearch">
          <div class="input-content">
            <input v-model="searchText" type="text" placeholder="请输入关键词">
            <i class="iconfont icon-sousuo1" @click="searchBtn"></i>
          </div>
          <i 
            class="off-search iconfont icon-guanbi"
            @click="pcSearchToggle(false)">
          </i>
        </div>
        <i
          class="iconfont icon-sousuo1"
          v-show="!isSearch"
          @click="pcSearchToggle(true)"
          >
        </i>
      </div>
      <div class="header-btn hidden-md hidden-lg">
        <i class="iconfont icon-sousuo1" v-show="!isSearchShow" @click="mSearchToggle(true)"></i>
        <i class="iconfont icon-toggle" v-show="!isMenuShow" @click="menuToggle(true)"></i>
        <i class="iconfont icon-guanbi" v-show="isSearchShow||isMenuShow" @click="offPopupBox"></i>
      </div>
    </header>
    <div class="popup-box" :class="{in: isSearchShow||isMenuShow}">
      <div v-show="isSearchShow">
        <van-search v-model="searchValue" placeholder="请输入搜索关键词" />
      </div>
      <div v-show="isMenuShow">
        <van-collapse v-model="activeNames" accordion>
          <van-collapse-item title="关于华为" name="1">
            <van-cell value="公司简介" />
            <van-cell value="可持续发展" />
            <van-cell value="信任中心" />
            <van-cell value="管理层信息" />
            <van-cell value="招贤纳士" />
          </van-collapse-item>
          <van-collapse-item title="新闻与活动" name="2">
            <van-cell value="新闻" />
            <van-cell value="展会活动" />
            <van-cell value="华为直播" />
            <van-cell value="媒体图库" />
          </van-collapse-item>
          <van-collapse-item title="发现" name="3">
            <van-cell value="成功故事" />
            <van-cell value="行业洞察" />
            <van-cell value="出版物" />
          </van-collapse-item>
          <van-collapse-item title="我们的产品" name="4">
            <van-cell value="个人及家庭产品" />
            <van-cell value="企业业务产品" />
            <van-cell value="运营商网络产品" />
            <van-cell value="华为云服务" />
          </van-collapse-item>
          <van-collapse-item title="技术支持" name="5">
            <van-cell value="消费者技术支持" />
            <van-cell value="华为云技术支持" />
            <van-cell value="企业技术支持" />
            <van-cell value="运营商技术支持" />
            <van-cell value="产品安全通告" />
          </van-collapse-item>
        </van-collapse>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // pc-data
      activeIndex: '1',
      isSearch: false,
      searchText: '',
      // m-data
      isSearchShow: false,
      searchValue: '',
      isMenuShow: false,
      activeNames: ['1'],
    }
  },
  methods: {
    // all交互
    searchBtn() {
      let searchText = this.searchText;
      if(!searchText) {
        this.$message.error('搜索内容为空');
      }else {
        console.log('搜索的内容是:' + searchText)
        this.searchText = '';
        this.searchToggle(false);
      }
    },
    // pc交互
    handleSelect(key, keyPath) {
      console.log(this.url);
      console.log(key, keyPath);
    },
    pcSearchToggle(type) {
      this.isSearch = type
    },
    // m交互
    mSearchToggle(type) {
      this.isSearchShow = type;
      this.isMenuShow = false;
    },
    menuToggle(type) {
      this.isMenuShow = type;
      this.isSearchShow = false
    },
    offPopupBox() {
      if(this.isSearchShow) return this.isSearchShow = false
      if(this.isMenuShow) return this.isMenuShow = false
    }
  }
}
</script>

<style lang="less" scoped>
.header-box {
  position: fixed;
  z-index: 10;
  width: 100%;
  -webkit-transition: top 0.5s;
  transition: top 0.5s;
  height: 66px;
    box-shadow: 2px 0px 10px rgba(0, 0, 0, 0.2);
  header {
    height: 66px;
    background-color: #fff;
    box-shadow: 2px 0px 10px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    .logo {
      width: 115px;
      display: block;
      img {
        width: 100%;
        height: auto;
      }
    }
    .header-btn {
      i.iconfont {
        font-size: 26px;
        margin-left: 10px;
      }
    }
  }
  .popup-box {
    background: #fff;
    width: 100%;
    height:calc(100vh - 67px);
    position: fixed;
    top: 67px;
    z-index: 9;
    left: 100%;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
  }
  .in {
    left: 0;
  }
  // 导航
  .el-menu-demo {
    width: auto;
    transition: all 0.3s;
    border-bottom: unset;
    .el-menu-item, .el-submenu {
      line-height: 66px;
      height: 66px;
      /deep/ .el-submenu__title {
        line-height: 66px;
        height: 66px;
      }
    }
  }
  // 搜索框
  .search {
    width: 250px;
    display: flex;
    justify-content: flex-end;
    .search-input {
      display: flex;
      align-items: center;
      .input-content {
        display: flex;
        align-items: center;
        border: 1px solid #cecece;
        padding: 0 10px;
        margin-right: 10px;
        input {
          height: 40px;
        }
      }
    }
    .iconfont {
      font-size: 20px;
      cursor: pointer;
    }
  }
  // 打开与关闭的切换动画
  .dispear {
    transform: scale(0);
  }
}
</style>
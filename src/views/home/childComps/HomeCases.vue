<template>
  <div class="cases-content pt-70-pb-60">
    <home-content-title class="white">
      <h2 :style="{color: theTitle.nameColor}" slot="name">{{theTitle.name}}</h2>
      <h4 slot="translation">{{theTitle.translation}}</h4>
    </home-content-title>
    <div class="pc hidden-xs hidden-sm">
      <el-row :gutter="20">
        <el-col
          class="cases-col"
          v-for="(item, i) in cases.slice(0,3)"
          :key="item.id"
          :span="i == 0 ? 12 : 6"
          :class="{in: casesId === item.id}"
        >
          <div class="cases-item"
            @mouseover="casesListOver(item.id)"
            @mouseleave="casesListLeave"
          >
            <a href="javascript:;">
              <div class="mask"></div>
              <div class="p img-box">
                <el-image :src="item.bigPicture" fit="cover"></el-image>
              </div>
              <div class="text-box">
                <div class="title">{{item.successfulCasesName}}</div>
                <div class="content">{{item.briefIntroduction}}</div>
                <div class="read-more">
                  <span>了解更多</span>
                </div>
              </div>
            </a>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col
          class="cases-col"
          v-for="item in cases.slice(3,7)"
          :key="item.id"
          :span="6"
          :class="{in: casesId === item.id}"
          >
          <div class="cases-item"
            @mouseover="casesListOver(item.id)"
            @mouseleave="casesListLeave"
          >
            <a href="javascript:;">
              <div class="mask"></div>
              <div class="p img-box">
                <el-image :src="item.bigPicture" fit="cover"></el-image>
              </div>
              <div class="text-box">
                <div class="title">{{item.successfulCasesName}}</div>
                <div class="content">{{item.briefIntroduction}}</div>
                <div class="read-more">
                  <span>了解更多</span>
                </div>
              </div>
            </a>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="m hidden-md hidden-lg">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="item in cases" :key="item.id">
          <div class="mask"></div>
          <div class="p img-box">
            <van-image fit="cover" :src="item.bigPicture" />
          </div>
          <div class="text-box">
            <div class="title">{{item.successfulCasesName}}</div>
            <div class="content">{{item.briefIntroduction}}</div>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
import homeContentTitle from '../../../components/content/homeContentTitle/homeContentTitle'
import { Swipe, SwipeItem, Image as VanImage } from 'vant';

export default {
  components: {
    homeContentTitle,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [VanImage.name]: VanImage
  },
  props: {
    cases: {
      type:  Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      theTitle: {
        name: '成功案例',
        translation: 'CASES'
      },
      casesId: ''
    }
  },
  mounted() {
  },
  methods: {
    casesListOver(id) {
      this.casesId = id
    },
    casesListLeave() {
      this.casesId = ''
    }
  }
}
</script>

<style lang="less" scoped>
.cases-content {
  background-color: #095dcd;
  padding-bottom: 1.38rem;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  .mask {
    visibility: visible;
    opacity: 1;
    height: 50%;
    width: 100%;
    content: "";
    background: linear-gradient(rgba(0,0,0,0) 0%,rgba(0,0,0,0.3) 70%);
    display: block;
    top: auto;
    left: 0;
    bottom: 0;
    position: absolute;
    z-index: 1;
  }
  .img-box {
    height: 100%;
  }
  .text-box {
    position: absolute;
    bottom: -0.3em;
    left: 0;
    z-index: 9;
    margin: 0.37rem 5%;
    color: #ffffff;
    width: 90%;
    .title {
      font-size: 1.2em;
      line-height: 1.4em;
      font-weight: bold;
    }
    .content {
      font-size: 0.875em;
      line-height: 1.7em;
      opacity: 0.7;
      width: 80%;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
  .cases-item {
    height: 100%;
    position: relative;
  }
  .pc {
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    margin: 0 auto;
    clear:both;
    overflow: auto;
    /deep/ .el-row:first-child {
      height: 6.35rem;
    }
    /deep/ .el-row:last-child {
      height: 3.18rem;
    }
    .cases-col {
      height: 100%;
      padding: 0.18rem;
      /deep/ .el-image {
        width: 100%;
        height: 100%;
        img {
          transform: scale(1);
        }
      }
      .read-more {
        opacity: 0;
        font-size: 0.875em;
      }
    }
    .in {
      .mask {
        height: 80% !important;
        background: linear-gradient(rgba(0,0,0,0) 0%,rgba(0,0,0,0.7) 70%) !important;
      }
      /deep/ .img-box {
        img {
          transform: scale(1.1) !important;
          -webkit-transition: all 0.5s;
          transition: all 0.5s;
        }
      }
      .text-box {
        bottom: 0 !important;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
      }
      .read-more {
        opacity: 1 !important;
        -webkit-transition: all 0.8s;
        transition: all 0.8s;
      }
    }
  }
  .m {
    margin: 0 0.27rem;
    .text-box {
      bottom: 0;
    }
    .van-swipe {
      height: 6rem;
      .van-image {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
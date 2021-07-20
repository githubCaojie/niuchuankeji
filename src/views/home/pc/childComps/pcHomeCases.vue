<template>
  <div class="cases-content">
    <pc-home-content-title class="white">
      <h2 :style="{color: theTitle.nameColor}" slot="name">{{theTitle.name}}</h2>
      <h4 slot="translation">{{theTitle.translation}}</h4>
    </pc-home-content-title>
    <div class="pc">
      <el-row :gutter="20">
        <el-col
          class="cases-col"
          v-for="(item, i) in cases.slice(0,3)"
          :key="item.id"
          :span="i === 0 ? 12 : 6"
          :class="{in: homeImgId === item.id}"
        >
          <div 
            class="cases-item"
            @mouseover="itemOver(item.id)"
            @mouseleave="itemLeave"
          >
            <a @click.prevent="goCasesContent(item.id)">
              <div class="mask"></div>
              <pc-image :src="item.bigPicture" height="340px" :active="homeImgId === item.id"/>
              <div class="text-box">
                <div class="title">{{item.successfulCasesName}}</div>
                <div class="content">{{item.briefIntroduction}}</div>
                <div class="more">
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
          :class="{in: homeImgId === item.id}"
          >
          <div class="cases-item"
            @mouseover="itemOver(item.id)"
            @mouseleave="itemLeave"
          >
            <a @click.prevent="goCasesContent(item.id)">
              <div class="mask"></div>
              <pc-image :src="item.bigPicture" height="175px" :active="homeImgId === item.id"/>
              <div class="text-box">
                <div class="title">{{item.successfulCasesName}}</div>
                <div class="more">
                  <span>了解更多</span>
                </div>
              </div>
            </a>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import pcHomeContentTitle from '../../../../components/content/HomeContentTitle/pcHomeContentTitle';
import pcImage from '../../../../components/content/ncImage/pcImage';

export default {
  components: {
    pcHomeContentTitle,
    pcImage
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
      homeImgId: ''
    }
  },
  methods: {
    itemOver(id) {
      this.homeImgId = id
    },
    itemLeave() {
      this.homeImgId = ''
    },
    goCasesContent(id) {
      let routeUrl = this.$router.resolve({
        path: 'contentDetail',
        query: {
          type: 'cases',
          casesId: id
        }
      })
      window.open(routeUrl.href, '_blank');
    }
  }
}
</script>

<style lang="less" scoped>
.cases-content {
  background-color: #095dcd;
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
  .text-box {
    position: absolute;
    left: 0;
    z-index: 9;
    color: #ffffff;
    width: 100%;
    .title {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-weight: bold;
    }
    .content {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      opacity: 0.7;
    }
  }
  .cases-item {
    height: 100%;
    position: relative;
  }
  .pc {
    .text-box {
      bottom: -20px;
      padding: 20px;
      .title {
        font-size: 25.71px;
      }
      .content {
        font-size: 15.43px;
        margin-top: 14.5px;
      }
      .more {
        margin-top: 14.5px;
      }
    }
    /deep/ .el-row{
      padding-bottom: 44px;
    }
    .cases-col {
      /deep/ .el-image {
        width: 100%;
        height: 100%;
        img {
          transform: scale(1);
        }
      }
      .more {
        opacity: 0;
        font-size: 13px;
      }
    }
    .in {
      .mask {
        height: 80% !important;
        background: linear-gradient(rgba(0,0,0,0) 0%,rgba(0,0,0,0.7) 70%) !important;
      }
      .text-box {
        bottom: 0 !important;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
      }
      .more {
        opacity: 1 !important;
        -webkit-transition: all 0.8s;
        transition: all 0.8s;
      }
    }
  }
}
</style>
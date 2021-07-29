<template>
  <div class="product-content">
    <pc-home-content-title>
      <h2 :style="{color: theTitle.nameColor}" slot="name">{{theTitle.name}}</h2>
      <h4 slot="translation">{{theTitle.translation}}</h4>
    </pc-home-content-title>
    <div class="pc">
      <el-row :gutter="60">
        <el-col :span="8" v-for="item in classData" :key="item.id">
          <div
            class="class-item" 
          >
            <el-image fit="cover" :src="require('@/assets/img/' + item.iconUrl)"/>
            <div class="text-box">
              <h4 class="title">{{item.name}}</h4>
              <div class="sild" v-html="item.note">
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="60">
        <el-col 
          :span="6"
          v-for="item in product" 
          :key="item.id"
          :class="{in: homeImgId === item.id}"
        >
          <a 
            class="img-item" 
            @click.prevent="productImgItemClick(item.urlpath)"
            @mouseover="itemOver(item.id)"
            @mouseleave="itemLeave"
          >
            <pc-image :src="item.bigPicture" height="180px" :active="homeImgId === item.id"/>
            <div class="text-box">
              <div class="text text3hidden">
                {{item.briefIntroduction}}
              </div>
            </div>
          </a>
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
    product: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      theTitle: {
        name: '产品方案',
        translation: 'PRODUCTS'
      },
      classData: [
        {
          name: '智能终端',
          note: '<p><span>自助服务终端</span><span>智能会议交互终端</span></p><p><span>多媒体智能终端</span><span>桌面智能终端</span></p>',
          iconUrl:'HomeSasesIcon/products_01.png',
        },
        {
          name: '集成系统',
          note: '<p><span>协同办公方案</span><span>移动办公解决方案</span></p><p><span>信息系统容灾备案解决方案</span></p>',
          iconUrl:'HomeSasesIcon/products_02.png',
        },
        {
          name: '运维服务',
          note: '<p><span>可视化运维管理平台解决方案</span></p><p><span></span>质效型运维管理解决方案</p>',
          iconUrl:'HomeSasesIcon/products_03.png',
        }
      ],
      homeImgId: ''
    }
  },
  methods: {
    productImgItemClick(url) {
      let routeUrl = this.$router.resolve({
        path: 'productCenter'
      })
      window.open(routeUrl.href, '_blank');
    },
    itemOver(id) {
      this.homeImgId = id
    },
    itemLeave() {
      this.homeImgId = ''
    }
  }
}
</script>

<style lang="less" scoped>
.pc {
  /deep/ .el-row {
    margin-bottom: 90px;
  }
  .class-item {
    color: var(--white-font-clolr);
    background-color: var(--home-element-background);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 360px;
    height: 160px;
    padding: 0 40px;
    .el-image {
      width: 60px;
      height: 60px;
      flex-shrink: 0;
    }
    .text-box {
      text-align: center;
      margin-left: 5px;
      .title {
        font-size: 24px;
        margin-bottom: 27px;
      }
      .sild {
        font-size: 14px;
        line-height: 20px;
        /deep/ p {
          span {
            text-overflow:ellipsis;
            white-space:nowrap;
            margin: 0 2.5px;
          }
        }
      }
    }
  }
  .img-item {
    display: block;
    height: 300px;
    /deep/ .el-image {
      height: 180px;
    }
    .text-box {
      color: var(--white-font-clolr);
      background-color: var(--home-element-background);
      display: flex;
      align-items: center;
      height: 120px;
      padding: 0 15px;
      .text {
        height: 60px;
        line-height: 20px;
        text-indent: 28px;
        font-size: 14px;
      }
    }
  }
}
</style>
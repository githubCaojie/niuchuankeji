<template>
  <div class="product-content pt-70-pb-60">
    <home-content-title>
      <h2 :style="{color: theTitle.nameColor}" slot="name">{{theTitle.name}}</h2>
      <h4 slot="translation">{{theTitle.translation}}</h4>
    </home-content-title>
    <div class="pc hidden-xs hidden-sm">
      <el-row :gutter="30">
        <el-col :span="8" v-for="(item, i) in classData" :key="i">
          <a 
            class="class-item" 
          >
            <el-image fit="cover" :src="require('@/assets/img/' + item.iconUrl)"/>
            <div class="text-box">
              <h4 class="title">{{item.name}}</h4>
              <div class="sild">
                <span v-for="(noteItem, i) in item.note" :key="i">{{noteItem}}</span>
              </div>
            </div>
          </a>
        </el-col>
      </el-row>
      <el-row :gutter="30">
        <el-col 
          :span="6"
          v-for="item in product" 
          :key="item.id"
          :class="{in: imgItemId === item.id}"
        >
          <a 
            class="img-item" 
            @click.prevent="productImgItemClick(item.urlpath)"
            @mouseover="imgListOver(item.id)"
            @mouseleave="imgListLeave"
          >
            <p class="img"><el-image fit="cover" :src="item.bigPicture"/></p>
            <div class="text-box">
              {{item.briefIntroduction}}
            </div>
          </a>
        </el-col>
      </el-row>
    </div>
    <div class="m hidden-md hidden-lg">
      <van-row>
        <van-col span="8" class="class-item" v-for="item in classData" :key="item.id">
          <van-image fit="cover" :src="require('@/assets/img/' + item.iconUrl)"/>
          <p>{{item.name}}</p>
        </van-col>
      </van-row>
      <van-row gutter="15">
        <van-col span="12" v-for="item in product" :key="item.id">
          <a @click.prevent="productImgItemClick(item.urlpath)" class="img-item">
            <p class="img"><van-image fit="cover" :src="item.bigPicture"/></p>
            <div class="text-box">
              {{item.briefIntroduction}}
            </div>
          </a>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import homeContentTitle from '../../../components/content/homeContentTitle/homeContentTitle';
import { Image as VanImage, Col, Row } from 'vant';

export default {
  components: {
    homeContentTitle,
    [VanImage.name]: VanImage,
    [Col.name]: Col,
    [Row.name]: Row
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
          note: ['自助服务终端','智能会议交互终端','多媒体智能终端','桌面智能终端'],
          iconUrl:'HomeSasesIcon/products_01.png',
        },
        {
          name: '集成系统',
          note: ['协同办公方案','移动办公解决方案','信息系统容灾备案解决方案'],
          iconUrl:'HomeSasesIcon/products_02.png',
        },
        {
          name: '运维服务',
          note: ['可视化运维管理平台解决方案','质效型运维管理解决方案'],
          iconUrl:'HomeSasesIcon/products_03.png',
        }
      ],
      imgItemId: ''
    }
  },
  methods: {
    productImgItemClick(url) {
      console.log(url)
    },
    imgListOver(id) {
      console.log(id)
      this.imgItemId = id
    },
    imgListLeave() {
      this.imgItemId = ''
    }
  }
}
</script>

<style lang="less" scoped>
a {
  display: block;
  color: var(--white-font-clolr);
}
.class-item {
  .text-box {
    text-align: center;
    span {
      margin: 0 5px;
      text-overflow:ellipsis;
      white-space:nowrap;
    }
  }
}
.img-item {
  background-color: var(--home-element-background);
}
.pc {
  width: 80%;
  margin: 0 auto;
  font-size: var(--body-font-size);
  .in {
    /deep/ img {
      transform: scale(1.1) !important;
      -webkit-transition: all 0.5s;
      transition: all 0.5s;
    }
  }
  /deep/ .el-row {
    margin-bottom: 0.37rem;
  }
  .class-item {
    background-color: var(--home-element-background);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.96rem;
    /deep/ .el-image {
      width: 1rem;
    }
    .text-box {
      width: 65%;
      .title {
        font-size: 0.44rem;
        line-height: 0.7rem;
      }
      .sild {
        font-size: 0.25rem;
        line-height: 0.4rem;
      }
    }
  }
  .img-item {
    height: 4.86rem;
    /deep/ .el-image {
      height: 3.33rem;
    }
    .text-box {
      height: 1.05rem;
      line-height: 0.35rem;
      padding: 0 0.46rem;
      margin: 0.24rem 0;
      text-indent: 0.5rem;
      font-size: 0.25rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }
}
.m {
  margin: 0 0.27rem;
  .class-item {
    text-align: center;
    font-size: 0.4rem;
    margin-bottom: 0.15rem;
    /deep/ .van-image {
      background-color: var(--home-element-background);
      width: 2rem;
      height: 2rem;
      padding: 0.5rem;
      border-radius: 50%;
    }
  }
  .img-item {
    margin: 0.15rem 0;
    height: 4.53rem;
    /deep/ .van-image {
      height: 3rem;
    }
    .text-box {
      font-size: 0.25rem;
      text-indent: 0.5rem;
      line-height: 0.38rem;
      height: 1.05rem;
      padding: 0 0.46rem;
      margin: 0.24rem 0;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }
}
</style>
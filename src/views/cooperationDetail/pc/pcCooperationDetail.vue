<template>
  <div>
    <pc-child-banner />
    <div>
      <div class="breadcrumb">
        <pc-bread-crumb :breadCrumb="breadCrumb"/>
      </div>
      <div class="content">
        <el-row>
          <el-col
            :span="24"
            v-for="item in detail"
            :key="item.id"
          >
            <a href="javascript:;">
              <div class="pc item">
                <pc-image :src="item.bigPicture" height="175px" width="275px" :isborder="true"/>
                <div class="text">
                  <p class="title">{{item.title}}</p>
                  <p class="describe text3hidden" v-html="item.briefIntroduction"></p>
                </div>
              </div>
            </a>
          </el-col>
          <el-col>
            <a href="javascript:;">
              <div class="pc item">
                <div class="text width100">
                  <p class="title">伙伴方案组成</p>
                  <pc-image :src="require('../../../assets/img/partnerImg.png')" width="600px" />
                </div>
              </div>
            </a>
          </el-col>
          <el-col>
            <a href="javascript:;">
              <div class="pc item">
                <div class="text width100">
                  <p class="title">成为视频监控合作伙伴</p>
                  <pc-image :src="require('../../../assets/img/partnerImg2.png')" width="850px" />
                </div>
              </div>
            </a>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import pcChildBanner from '../../../components/content/childBanner/pcChildBanner';
import pcBreadCrumb from '../../../components/content/breadCrumb/pcBreadCrumb';
import pcImage from '../../../components/content/ncImage/pcImage';

export default {
  components: {
    pcChildBanner,
    pcBreadCrumb,
    pcImage,
  },
  props: {
    detail: {
      type: Array,
      default() {
        return []
      }
    }
  },
}
</script>

<style lang="less" scoped>
.breadcrumb {
  background-color: #f4f4f4;
  .bread-crumbs {
    height: 60px;
    border: unset;
  }
}
.content {
  /deep/ .el-row {
    .el-col:nth-last-child(even) {
      background-color: #f4f4f4;
    }
    .el-col{
      a {
        display: block;
        padding: 90px 0;
        .item {
          display: flex;
          align-items: center;
          flex-direction: row;
          .width100 {
            width: 100% !important;
            .img {
              margin: 30px auto;
            }
          }
          .img {
            margin: 0 auto;
          }
          .text {
            color: #666666;
            padding: 0 80px;
            width: 925px;
            .title {
              font-size: 24px;
              font-weight: 600;
              margin-bottom: 25px;
              text-align: center;
            }
            .describe {
              font-size: 16px;
              text-indent: 32px;
              line-height: 20px;
              height: 60px;
            }
          }
        }
      }
    }
  }
}
</style>
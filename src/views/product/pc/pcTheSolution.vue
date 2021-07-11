<template>
  <div>
    <pc-child-banner :bannerContent="bannerContent"/>
    <div>
      <div class="breadcrumb">
        <pc-bread-crumb :breadCrumb="breadCrumb"/>
      </div>
      <div class="content">
        <el-row>
          <el-col
            :span="24"
            v-for="item in solutionCentent"
            :key="item.id"
          >
            <a href="javascript:;">
              <div class="pc item">
                <pc-image :src="item.bigPicture" height="175px" width="275px" :isborder="true"/>
                <div class="text">
                  <p class="title">{{item.solutionName}}</p>
                  <p class="describe text3hidden" v-html="item.briefIntroduction"></p>
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

import { getTheSolutionContent } from '../../../network/product' 

export default {
  components: {
    pcChildBanner,
    pcBreadCrumb,
    pcImage
  },
  props: {
    bannerContent: {
      type: Object,
      default() {
        return {}
      }
    },
    breadCrumb: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      solutionCentent: []
    }
  },
  created() {
    this.getTheSolutionContent()
  },
  methods: {
    getTheSolutionContent() {
      getTheSolutionContent().then(res => {
        this.solutionCentent = res.data.list
        console.log(res)
      })
    }
  }
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
    .el-col:nth-last-child(odd) {
      background-color: #f4f4f4;
      a {
        .item {
          flex-direction: row-reverse;
        }
      }
    }
    .el-col{
      a {
        display: block;
        padding: 90px 0;
        .item {
          display: flex;
          align-items: center;
          flex-direction: row;
          .text {
            color: #666666;
            padding: 0 80px;
            width: 925px;
            .title {
              font-size: 24px;
              font-weight: 600;
              margin-bottom: 25px;
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
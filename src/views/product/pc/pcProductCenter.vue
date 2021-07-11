<template>
  <div>
    <pc-child-banner :bannerContent="bannerContent"/>
    <div class="pc">
      <div class="breadcrumb">
        <pc-bread-crumb :breadCrumb="breadCrumb"/>
      </div>
      <div class="content">
        <el-row :gutter="60">
          <el-col
            v-for="item in productCenteCentent.list"
            :key="item.id"
            :span="6"
          >
          <div class="item">
            <pc-child-img-item>
              <div slot="img">
                <pc-image :src="item.bigPicture" height="200px"/>
              </div>
              <div class="text" slot="centent">
                <p class="title text3hidden">{{item.productName}}</p>
                <p class="describe text3hidden">{{item.briefIntroduction}}</p>
              </div>
            </pc-child-img-item>
          </div>
          </el-col>
        </el-row>
      </div>
      <div class="pagination">
        <el-pagination
          background
          @current-change="handleCurrentChange"
          :current-page.sync="productPage"
          :page-size="productCenteCentent.pageSize"
          layout="total, prev, pager, next"
          :total="productCenteCentent.total">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import pcChildBanner from '../../../components/content/childBanner/pcChildBanner';
import pcBreadCrumb from '../../../components/content/breadCrumb/pcBreadCrumb';
import pcImage from '../../../components/content/ncImage/pcImage';
import pcChildImgItem from '../../../components/content/childImgItem/pcChildImgItem';

export default {
  components: {
    pcChildBanner,
    pcBreadCrumb,
    pcImage,
    pcChildImgItem,
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
    },
    productCenteCentent: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      productCenterNumber: {},
      productPage: 1,
    }
  },
  methods: {
    handleCurrentChange(val) {
      this.$emit('handleCurrentChange', val)
    }
  }
}
</script>

<style lang="less" scoped>
.pc {
  padding: 90px 0;
  .breadcrumb {
    margin-bottom: 64px;
  }
  .content {
    min-height: 802px;
    .item {
      border: 1px solid #e2e2e2;
      margin-bottom: 60px;
      background-color: #fff;
      .text {
        border-top: 1px solid #e2e2e2;
        color: #666666;
        padding-bottom: 12px;
        .title {
          text-align: center;
          font-size: 16.88px;
          line-height: 66px;
          font-weight: 600;
        }
        .describe {
          font-size: 14px;
          line-height: 20px;
          text-indent: 28px;
          height: 60px;
          padding: 0 12px;
        }
      }
    }
  }
  .pagination {
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
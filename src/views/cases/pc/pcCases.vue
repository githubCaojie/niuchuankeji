<template>
  <div>
    <pc-child-banner />
    <div class="breadcrumb">
      <pc-bread-crumb/>
    </div>
    <div class="pc">
      <div class="content">
        <el-row :gutter="60">
          <el-col
            v-for="item in cases.list"
            :key="item.id"
            :span="6"
            :class="{in: mouseImgid === item.id}"
          >
          <div
            class="item"
            @mouseover="itemOver(item.id)"
            @mouseleave="itemLeave"
          >
            <pc-child-img-item>
              <div slot="img">
                <pc-image :src="item.bigPicture" height="200px" :active="mouseImgid === item.id"/>
              </div>
              <div class="text" slot="centent">
                <p class="title text1hidden">{{item.successfulCasesName}}</p>
                <p class="describe text3hidden">{{item.briefIntroduction}}</p>
              </div>
              <div class="btn" slot="btn">
                <el-button @click="goCasesDetail(item.id)">查看更多</el-button>
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
          :current-page.sync="casesPage"
          :page-size="cases.pageSize"
          layout="total, prev, pager, next"
          :total="cases.total">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import pcChildBanner from '../../../components/content/childBanner/pcChildBanner';
import pcBreadCrumb from '../../../components/content/breadCrumb/pcBreadCrumb';
import pcImage from '../../../components/content/ncImage/pcImage';
import pcChildImgItem from '../../../components/content/childImgItem/pcChildImgItem'

export default {
  components: {
    pcChildBanner,
    pcBreadCrumb,
    pcImage,
    pcChildImgItem
  },
  props: {
    cases: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data () {
    return {
      casesPage: 1,
      mouseImgid: ''
    }
  },
  methods: {
    handleCurrentChange(val) {
      this.$emit('handleCurrentChange', val)
    },
    goCasesDetail(id) {
      this.$emit('goCasesDetail', id)
    },
    itemOver(id) {
      console.log(id)
      this.mouseImgid = id
    },
    itemLeave() {
      this.mouseImgid = ''
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
  min-height: 802px;
  .item {
    display: block;
    border: 1px solid #e2e2e2;
    margin-bottom: 60px;
    cursor: pointer;
    .text {
      border-top: 1px solid #e2e2e2;
      color: #666666;
      padding: 0 12px 12px;
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
      }
    }
    .btn {
      text-align: center;
      padding: 30px;
      button {
        font-size: 14px;
        background-color: var(--home-element-background);;
        border-radius: unset;
        color: #ffffff;
        width: 100px;
        border: unset;
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
</style>
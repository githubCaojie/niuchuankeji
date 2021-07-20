<template>
  <div>
    <pc-child-banner />
    <div class="breadcrumb">
      <pc-bread-crumb />
    </div>
    <div class="recruitment pc">
      <el-collapse accordion>
        <el-collapse-item v-for="item in recruit.list" :key="item.id">
          <template slot="title">
            <div style="text-align:left">{{item.jobs}}</div>
            <div>{{item.typeWork}}</div>
            <div>{{item.placeWork}}</div>
            <div style="text-align:right">{{item.time}}</div>
          </template>
          <div class="item-content">
            <div class="responsibilities">
              <h4>岗位职责</h4>
              <div v-html="item.responsibilities"></div>
            </div>
            <div class="requirement">
              <h4>岗位要求</h4>
              <div v-html="item.requirement"></div>
            </div>
          </div>
        </el-collapse-item>
      </el-collapse>
      <div class="pagination">
        <el-pagination
          background
          @current-change="handleCurrentChange"
          :current-page.sync="recruitPage"
          :page-size="recruit.pageSize"
          layout="total, prev, pager, next"
          :total="recruit.total">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import pcChildBanner from '../../../components/content/childBanner/pcChildBanner';
import pcBreadCrumb from '../../../components/content/breadCrumb/pcBreadCrumb';

export default {
  components: {
    pcChildBanner,
    pcBreadCrumb
  },
  props: {
    recruit: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data () {
    return {
      recruitPage: 1,
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
.recruitment {
  .breadcrumb {
    margin: 95px 0 60px;
  }
  /deep/ .el-collapse {
    min-height: 804px;
    .el-collapse-item:nth-last-child(odd) {
      .el-collapse-item__header {
        background-color: #edf9ff;
      }
    }
    .el-collapse-item {
      .el-collapse-item__header {
        display: flex;
        justify-content: space-between;
        padding: 0 30px;
        color: #656766;
        line-height: 60px;
        height: 60px;
        div {
          width: 25%;
          text-align: center;
        }
        i {
          display: none;
        }
      }
      .is-active {
        background-color: #3f67d6 !important;
        color: #fff;
      }
      .item-content {
        padding: 30px;
        color: #999999;
        font-size: 14px;
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
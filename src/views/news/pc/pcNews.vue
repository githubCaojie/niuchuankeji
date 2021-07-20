<template>
  <div>
    <pc-child-banner />
    <div class="breadcrumb">
      <pc-bread-crumb/>
    </div>
    <div class="pc">
      <div class="content">
        <el-row>
          <el-col
            v-for="item in news.list"
            :key="item.id"
          >
            <el-link target="_blank" @click="goNewsDetail(item.id)">
            <span class="title">
              {{item.title}}
            </span>
            <span class="date">
              {{item.time}}
            </span>
            </el-link>
          </el-col>
        </el-row>
      </div>
      <div class="pagination">
        <el-pagination
          background
          @current-change="handleCurrentChange"
          :current-page.sync="newsPage"
          :page-size="news.pageSize"
          layout="total, prev, pager, next"
          :total="news.total">
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
    news: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data () {
    return {
      newsPage: 1
    }
  },
  methods: {
    handleCurrentChange(val) {
      this.$emit('handleCurrentChange', val)
    },
    goNewsDetail(id) {
      this.$emit('goNewsDetail', id)
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  min-height: 802px;
  a {
    display: block;
    line-height: 20px;
    padding: 20px 0;
    text-indent: 20px;
    font-size: 14px;
    border-bottom: 1px solid #c8d8e8;
    /deep/ .el-link--inner {
      display: flex;
      justify-content: space-between;
      .title {
        position: relative;
      }
      .title::before {
        content: '';
        width: 8px;
        height: 8px;
        background-color: #1961ab;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
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
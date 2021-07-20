<template>
  <div>
    <m-child-banner/>
    <div class="recruitment">
      <van-collapse v-model="activeName" accordion>
        <van-collapse-item v-for="item in recruit.list" :key="item.id" :title="item.jobs" :name="item.id">
          <div>
            <div>
              <h4>发布时间：{{item.time}}</h4>
              <h4>工作类型：{{item.typeWork}}</h4>
              <h4>工作地点：{{item.placeWork}}</h4>
            </div>
            <div>
              <h4>岗位职责</h4>
              <div v-html="item.responsibilities"></div>
            </div>
            <div>
              <h4>岗位要求</h4>
              <div v-html="item.requirement"></div>
            </div>
          </div>
        </van-collapse-item>
      </van-collapse>
    </div>
    <van-pagination v-model="currentPage" :total-items="recruit.total" :items-per-page="recruit.pageSize" />
  </div>
</template>

<script>
import mChildBanner from '../../../components/content/childBanner/mChildBanner'

import { Collapse, CollapseItem, Pagination } from 'vant';

export default {
  components: {
    mChildBanner,
    [Collapse.name]: Collapse,
    [CollapseItem.name]: CollapseItem,
    [Pagination.name]: Pagination
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
      activeName: ''
    }
  }
}
</script>

<style>

</style>
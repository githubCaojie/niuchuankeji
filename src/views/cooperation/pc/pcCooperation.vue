<template>
  <div>
    <pc-child-banner />
    <div class="breadcrumb">
      <pc-bread-crumb/>
    </div>
    <div class="pc">
      <div class="introduce">
        <h3 class="name">纽川科技生态</h3>
        <div class="content" v-html="company"></div>
      </div>
      <div class="class">
        <el-row :gutter="60">
          <el-col :span="8" v-for="item in cooperation" :key="item.id">
              <div
                class="item"
                @mouseover="itemOver(item.id)"
                @mouseleave="itemLeave"
              >
                <pc-child-img-item>
                    <div slot="img">
                      <pc-image :src="item.bigPicture" height="220px" :active="mouseImgid === item.id"/>
                    </div>
                    <div class="text" slot="centent">
                      <p class="title text1hidden">{{item.title}}</p>
                      <p class="describe text3hidden">{{item.briefIntroduction}}</p>
                    </div>
                    <div class="btn" slot="btn">
                      <el-button @click="goCooperationDeyail(item.id)">查看更多</el-button>
                    </div>
                </pc-child-img-item>
              </div>
          </el-col>
        </el-row>
      </div>
      <div class="partner">
        <h3 class="name">合作伙伴展示</h3>
        <div class="content">覆盖法律行业及律师，公司法务和视频监控行业、智能终端行业</div>
        <el-row :gutter="66">
          <el-col v-for="item in partner" :key="item.id" :span="6">
            <div
              @mouseover="itemOver(item.id)"
              @mouseleave="itemLeave"
            >
              <pc-image :src="item.image" height="100px" :isborder="true" :active="mouseImgid === item.id"/>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import pcChildBanner from '../../../components/content/childBanner/pcChildBanner';
import pcBreadCrumb from '../../../components/content/breadCrumb/pcBreadCrumb';
import pcChildImgItem from '../../../components/content/childImgItem/pcChildImgItem';
import pcImage from '../../../components/content/ncImage/pcImage';


export default {
  components: {
    pcChildBanner,
    pcBreadCrumb,
    pcChildImgItem,
    pcImage,
  },
  props: {
    company: {
      type: String,
      default() {
        return ""
      }
    },
    cooperation: {
      type: Array,
      default() {
        return []
      }
    },
    partner: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data () {
    return {
      mouseImgid: ''  
    }
  },
  methods: {
    goCooperationDeyail(id) {
      this.$emit('goCooperationDeyail', id)
    },
    itemOver(id) {
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
.pc{
  margin: 0 auto 90px;
  .introduce, .partner {
    .name {
      text-align: center;
      font-size: 36px;
      color: #555555;
      margin: 90px 0 25px;
    }
    .content {
      margin-bottom: 90px;
      font-size: 20px;
      color: #999999;
    }
  }
  .introduce {
    .content {
      text-indent: 40px;
    }
  }
  .partner {
    .content {
      text-align: center;
    }
    .el-col {
      margin-bottom: 30px;
    }
  }
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
        height: 35px;
      }
    }
  }
}
</style>
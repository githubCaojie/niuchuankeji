<template>
  <div>
    <pc-child-banner :bannerContent="bannerContent"/>
    <div class="pc">
      <div class="introduce">
        <h3 class="name">纽川科技生态</h3>
        <div class="content">纽川技术有限公司是一家面向全国的IT技术服务及行业解决方案提供商，总部位于湖南长沙，自身强大的研发与创新能力，采用基于大数据、云计算和移动互联等新兴技术，为政府、教育、零售、能源、制造、医疗、电信、交通、等行业客户提供丰富的解决方案及服务。“智慧城市”战略的提出，为纽川的发展指明了新方向。将继续秉承“诚信、务实、高效、共赢”的理念，与时俱进，改革创新，奋力拼搏，为客户提供更加优质的服务，创建更加优质的工程，为智慧城市的建设发展做出更大贡献。</div>
      </div>
      <div class="class">
        <el-row :gutter="60">
          <el-col :span="8" v-for="item in cooperation" :key="item.id">
              <div class="item">
                <pc-child-img-item>
                    <div slot="img">
                      <pc-image :src="item.bigPicture" height="220px"/>
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
            <a href="javascript:;">
              <pc-image :src="item.image" height="100px" :isborder="true"/>
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
    bannerContent: {
      type: Object,
      default() {
        return {}
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
  methods: {
    goCooperationDeyail(id) {
      this.$emit('goCooperationDeyail', id)
    }
  }
}
</script>

<style lang="less" scoped>
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
        background-color: #024eb7;
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
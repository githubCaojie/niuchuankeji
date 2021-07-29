<template>
  <div class="cooperation-content">
    <pc-home-content-title class="white">
      <h2 :style="{color: theTitle.nameColor}" slot="name">{{theTitle.name}}</h2>
      <h4 slot="translation">{{theTitle.translation}}</h4>
    </pc-home-content-title>
    <div class="pc hidden-xs hidden-sm">
      <el-row :gutter="20">
        <el-col 
          :span="8" v-for="item in copperation"
          :key="item.id"
        >
        <div
          @mouseover="cooperationItemOver(item.id)"
          @mouseleave="itemLeave"
          class="item"
        >
          <a @click.prevent="goCooperation">
            <pc-image :src="item.bigPicture" height="175px" :active="cooperationActiveId === item.id"/>
            <div class="bg-box"></div>
            <div class="text-box">{{item.title}}</div>
          </a>
        </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6" v-for="item in partner" :key="item.id">
        <div 
          @mouseover="partnerItemOver(item.id)"
          @mouseleave="itemLeave"
        >
          <a @click.prevent="goCooperation">
            <pc-image :src="item.image" height="100px" :active="partnerActiveId === item.id"/>
          </a>
        </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import pcHomeContentTitle from '../../../../components/content/HomeContentTitle/pcHomeContentTitle';
import pcImage from '../../../../components/content/ncImage/pcImage';

export default {
  components: {
    pcHomeContentTitle,
    pcImage
  },
  props: {
    partner: {
      type: Array,
      default() {
        return []
      }
    },
    copperation: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      theTitle: {
        name: '生态合作',
        translation: 'COPPERATION'
      },
      cooperationActiveId: '',
      partnerActiveId: '',
    }
  },
  methods: {
    cooperationItemOver(id) {
      this.cooperationActiveId = id;
    },
    partnerItemOver(id) {
      this.partnerActiveId = id;
    },
    itemLeave() {
      this.partnerActiveId = '';
      this.cooperationActiveId = '';
    },
    goCooperation() {
      this.$router.push({
        path: "cooperation"
      })
    }
  }
}
</script>

<style lang="less" scoped>
.cooperation-content {
  background-color: var(--home-element-background);;
  .bg-box {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.5);
  }
  .text-box {
    position: absolute;
    width: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-size: 24px;
    font-weight: 600;
    color: #123f70;
  }
  .pc {
    .el-row{
      .el-col-8 {
        margin-bottom: 50px;
        .item {
          position: relative;
        }
      }
      .el-col-6 {
        margin-bottom: 20px;
      }
    }
    .el-row:nth-last-child(1) {
      padding-bottom: 30px;
    }
  }
}
</style>
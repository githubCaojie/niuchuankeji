<template>
  <div class="cooperation-content">
    <pc-home-content-title class="white">
      <h2 :style="{color: theTitle.nameColor}" slot="name">{{theTitle.name}}</h2>
      <h4 slot="translation">{{theTitle.translation}}</h4>
    </pc-home-content-title>
    <div class="pc hidden-xs hidden-sm">
      <el-row :gutter="20">
        <el-col 
          :span="8" v-for="item in copperation.slice(0,3)"
          :key="item.id"
        >
        <div
          @mouseover="itemOver(item.id)"
          @mouseleave="itemLeave"
          class="item"
        >
          <a @click.prevent="goCooperation">
            <pc-image :src="item.image" height="175px" :active="homeImgId === item.id"/>
            <div class="title-text">{{item.name}}</div>
          </a>
        </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6" v-for="item in copperation.slice(3,4)" :key="item.id">
        <div 
          @mouseover="itemOver(item.id)"
          @mouseleave="itemLeave"
        >
          <a @click.prevent="goCooperation">
            <pc-image :src="item.image" height="100px" :active="homeImgId === item.id"/>
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
      homeImgId: ''
    }
  },
  methods: {
    itemOver(id) {
      this.homeImgId = id;
    },
    itemLeave() {
      this.homeImgId = '';
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
  background-color: #01267f;
  .title-text {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    transform: translateY(-50%);
    text-align:center;
    z-index: 9;
    color: #2f456a;
    font-size: 20px;
    font-weight: bold;
  }
  .pc {
    .el-col {
      margin-bottom: 1.11rem;
      .item {
        position: relative;
      }
    }
  }
}
</style>
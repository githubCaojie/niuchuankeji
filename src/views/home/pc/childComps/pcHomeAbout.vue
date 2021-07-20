<template>
  <div class="about-content">
    <pc-home-content-title class="white">
      <h2 slot="name">{{theTitle.name}}</h2>
      <h4 slot="translation">{{theTitle.translation}}</h4>
    </pc-home-content-title>
    <div class="pc hidden-xs hidden-sm">
      <div class="about-copy" v-html="company.companyProfile">
      </div>
      <el-row class="panel-list">
        <el-col
          :span="6"
          class="panel-item"
          v-for="(item,i) in panelData"
          :key="i"
        >
        <a @click.prevent="goAbout(item.type)">
          <el-image
            @mouseover="panelOver(i)"
            @mouseleave="panelLeave"
            :class="{'active': panelIndex == i}"
            :src="panelIndex == i?item.activeImg:item.img"
          />
        </a>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import pcHomeContentTitle from '../../../../components/content/HomeContentTitle/pcHomeContentTitle';

export default {
  components: {
    pcHomeContentTitle
  },
  props: {
    company: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      theTitle: {
        name: '关于我们',
        translation: 'ABOUT US'
      },
      panelData: [
        {
          titile: '纽川简介',
          img: require('../../../../assets/img/HomeServiceIcon/introduction.png'),
          activeImg: require('../../../../assets/img/HomeServiceIcon/introduction_active.png'),
          type: 'introduce'
        },
        {
          titile: '企业文化',
          img: require('../../../../assets/img/HomeServiceIcon/culture.png'),
          activeImg: require('../../../../assets/img/HomeServiceIcon/culture_active.png'),
          type: 'course'
        },
        {
          titile: '荣誉资质',
          img: require('../../../../assets/img/HomeServiceIcon/qualification.png'),
          activeImg: require('../../../../assets/img/HomeServiceIcon/qualification_active.png'),
          type: 'honor'
        },
        {
          titile: '招贤纳士',
          img: require('../../../../assets/img/HomeServiceIcon/recruitment.png'),
          activeImg: require('../../../../assets/img/HomeServiceIcon/recruitment_active.png'),
          type: 'recruitments'
        }
      ],
      panelIndex: -1,
    }
  },
  methods: {
    panelOver(i) {
      this.panelIndex = i;
    },
    panelLeave() {
      this.panelIndex = -1;
    },
    goAbout(type) {
      if(type === 'recruitments') {
        let routeUrl = this.$router.resolve({
          path: 'recruitments'
        })
        window.open(routeUrl.href, '_blank');
      }else {
        let routeUrl =this.$router.resolve({
          path: 'aboutus',
          query: {
            type: type
          }
        })
        window.open(routeUrl.href, '_blank');
      }
    }
  }
}
</script>

<style lang="less" scoped>
.about-content {
  background-image: url('../../../../assets/img/about_bg.jpg');
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: block;
  .about-copy {
    color: #ffffff;
  }
  .pc {
    .about-copy {
      font-size: 18px;
      text-indent: 36px;
      line-height: 30px;
    }
    .panel-item {
      text-align: center;
      padding: 50px 0 118px;
      .el-image {
        width: 145px;
        height: 145px;
        border-radius: 50%;
      }
      .active {
        -webkit-transition: top 0.5s;
        transition: top 0.5s;
        .el-image {
          background-color: #008cd7;
        }
      }
    }
  }
}
</style>
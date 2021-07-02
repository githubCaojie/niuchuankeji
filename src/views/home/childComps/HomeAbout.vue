<template>
  <div class="about-content pt-70-pb-60">
    <home-content-title class="white">
      <h2 slot="name">{{theTitle.name}}</h2>
      <h4 slot="translation">{{theTitle.translation}}</h4>
    </home-content-title>
    <div class="about-copy">
      此处为公司简介文案，此处为公司简介文案，此处为公司简介文案，此处为公司简介文案，此处为公司简介文案，此处为公司简介文案，此处为公司简介文案，此处为公司简介文案，此处为公司简介文案，此处为公司简介文案，
    </div>
    <div class="el-panel-list">
      <div
        class="panel-item"
        v-for="(item,i) in panelData"
        :key="i"
        @mouseover="panelOver(i)"
        @mouseleave="panelLeave"
      >
        <a :class="{'active': panelIndex == i}" href="javascript:;">
          <el-image :src="panelIndex == i?item.activeImg:item.img"/>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import homeContentTitle from '../../../components/content/homeContentTitle/homeContentTitle'
export default {
  data() {
    return {
      theTitle: {
        name: '关于我们',
        translation: 'ABOUT US'
      },
      panelData: [
        {
          titile: '纽川简介',
          img: require('../../../assets/img/HomeServiceIcon/introduction.png'),
          activeImg: require('../../../assets/img/HomeServiceIcon/introduction_active.png')
        },
        {
          titile: '企业文化',
          img: require('../../../assets/img/HomeServiceIcon/culture.png'),
          activeImg: require('../../../assets/img/HomeServiceIcon/culture_active.png')
        },
        {
          titile: '荣誉资质',
          img: require('../../../assets/img/HomeServiceIcon/qualification.png'),
          activeImg: require('../../../assets/img/HomeServiceIcon/qualification_active.png')
        },
        {
          titile: '招贤纳士',
          img: require('../../../assets/img/HomeServiceIcon/recruitment.png'),
          activeImg: require('../../../assets/img/HomeServiceIcon/recruitment_active.png')
        }
      ],
      panelIndex: -1,
    }
  },
  components: {
    homeContentTitle
  },
  methods: {
    panelOver(i) {
      this.panelIndex = i;
    },
    panelLeave() {
      this.panelIndex = -1;
    }
  }
}
</script>

<style lang="less" scoped>
.about-content {
  background-image: url('../../../assets/img/about_bg.jpg');
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: block;
  .about-copy {
    width: 62.5%;
    margin: 0 auto;
    font-size: 14px;
    line-height: 30px;
    text-indent: 28px;
    color: #ffffff;
  }
  .el-panel-list {
    width: 62.5%;
    margin: 0 auto ;
    padding: 50px 0 100px;
    display: flex;
    justify-content: space-between;
    .panel-item {
      width: 20%;
      text-align: center;
      a {
        display: block;
        .el-image {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
        }
      }
      a.active {
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
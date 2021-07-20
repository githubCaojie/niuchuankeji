<template>
  <div>
    <pc-child-banner/>
    <div class="breadcrumb">
      <pc-bread-crumb/>
    </div>
    <div class="pc introduce" ref="introduce">
      <h3 class="name">
        <pc-image :src="require('../../../assets/img/logoActive.png')" height="38px" width="36px"/>
        纽川简介
      </h3>
      <div class="content">
        <div class="img">
          <pc-image :src="company.bigPicture" height="255px" width="345px"/>
        </div>
        <div class="text" v-html="company.companyProfile"></div>
      </div>
    </div>
    <div class="course" ref="course">
      <el-image class="bg" ref="coursebg" :src="require('../../../assets/img/aboutCourse_bg.jpg')"/>
      <div class="pc content">
        <h3 class="name">发展历程</h3>
        <el-steps :active="development.length">
          <el-step v-for="(item, index) in development" :key="item.id" :title="`历程${index+1}`" :description="item.development"></el-step>
        </el-steps>
      </div>
    </div>
    <div class="honor" ref="honor">
      <h3 class="name">荣誉资质</h3>
      <div class="content pc">
        <swiper ref="mySwiper" v-bind:options="swiperOptions">
          <swiper-slide v-for="item in honor" :key="item.id">
            <pc-image :src="item.image" height="300px" width="215px" fit="fill"/>
          </swiper-slide>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
    </div>
    <div class="contact pc" ref="contact">
      <h3 class="name">联系我们</h3>
      <div class="content">
        <pc-image :src="contact.addressImage"/>
        <ul>
          <li><pc-image :src="require('../../../assets/img/mobileIcon.png')" height="16px" width="14px" fit="fill"/>电话：{{contact.telephone}}</li>
          <li><pc-image :src="require('../../../assets/img/faxIcon.png')" height="16px" width="14px"/>传真：{{contact.fax}}</li>
          <li><pc-image :src="require('../../../assets/img/mailIcon.png')" height="16px" width="14px"/>邮箱：{{contact.mailbox}}</li>
          <li><pc-image :src="require('../../../assets/img/addressIcon.png')" height="16px" width="14px"/>公司地址：{{contact.companyAddress}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import pcChildBanner from '../../../components/content/childBanner/pcChildBanner';
import pcBreadCrumb from '../../../components/content/breadCrumb/pcBreadCrumb';
import pcImage from '../../../components/content/ncImage/pcImage';

import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";

export default {
  components: {
    pcChildBanner,
    pcBreadCrumb,
    pcImage,
    swiper,
    swiperSlide
  },
  props: {
    company: {
      type: Object,
      default() {
        return {}
      }
    },
    development: {
      type: Array,
      default() {
        return []
      }
    },
    honor: {
      type: Array,
      default() {
        return []
      }
    },
    contact: {
      type: Object,
      default() {
        return {}
      }
    },
  },
  data () {
    return {
      swiperOptions: {
        loop: true,
        speed: 2000,
        slidesPerView: 4,
        autoplay: {
          delay: 3000,

          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        // 设置点击箭头
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }
      },
    }
  },
  watch: {
    "$store.state.aboutType": function(val, oldVal) {
      document.documentElement.scrollTop = this.$refs[val].offsetTop
    }
  },
  mounted () {
    document.documentElement.scrollTop = this.$refs[this.$store.state.aboutType].offsetTop
  }
}
</script>

<style lang="less" scoped>
h3.name {
  font-size: 34px;
  color: #000033;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 55px;
}
.introduce {
  padding: 90px 0;
  .name{
    .img {
      margin-right: 16px;
    }
  }
  .content {
    display: flex;
    align-items: center;
    .img::before {
      content: "";
      width: 240px;
      height: 190px;
      background-color: #008cd6;
      position: absolute;
      top: -38px;
      left: 0;
      z-index: -1;
    }
    .img::after {
      content: "";
      width: 150px;
      height: 190px;
      background-color: #f68a1b;
      position: absolute;
      right: 0;
      bottom: -20px;
      z-index: -1;
    }
    .img {
      padding-left: 40px;
      position: relative;
    }
    .text {
      font-size: 16px;
      line-height: 30px;
      color: #6a6a6a;
      margin-left: 110px;
    }
  }
}
.course::after{
  content: "";
  display: block;
  clear: both;
  
}
.course {
  display: flex;
  justify-content: center;
  align-items: center;
  .bg {
    float: left;
  }
  .content {
    position: absolute;
    .name {
      color: #ffffff;
    }
  }
  /deep/ .el-steps {
    .el-step {
      .el-step__main {
        .el-step__title, .el-step__description {
          color: #ffffff;
        }
      }
    }
  }
}
.honor {
  padding: 90px 0;
  .content {
    .swiper-container {
      .swiper-wrapper {
        .swiper-slide {
          .img {
            margin: 0 auto;
          }
        }
      }
      .swiper-button-next, .swiper-button-prev {
        background-color: #3d94c9;
        color: #ffffff;
        width: 35px;
        height: 150px;
        top: 50%;
        transform: translateY(-50%);
      }
      .swiper-button-prev:after, .swiper-button-next:after {
        font-size: 30px;
      }
      .swiper-button-prev {
        left: 0px;
      }
      .swiper-button-next {
        right: 0px;
      }
    }
  }
}
.contact {
  padding: 90px 0;
  .content {
    ul {
      padding-top: 60px;
      li {
        color: #666666;
        font-size: 16px;
        line-height: 34px;
        display: flex;
        align-items: center;
        .img {
          margin-right: 10px;
        }
      }
    }
  }
}
</style>
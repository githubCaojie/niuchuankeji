<template>
  <div>
    <m-child-banner/>
    <div class="m introduce" ref="introduce">
      <h3 class="name">
        <p class="img">
          <van-image :src="require('../../../assets/img/logoActive.png')"/>
        </p>
        纽川简介
      </h3>
      <div class="content" v-html="company.companyProfile">

      </div>
    </div>
    <div class="course">
      <h3 class="name">发展历程</h3>
      <div class="content">
        <van-steps direction="vertical" :active="-1">
          <van-step v-for="(item, index) in development" :key="item.id">
            <h3>历程{{index + 1}}：</h3>
            <p>{{item.development}}</p>
          </van-step>
        </van-steps>
      </div>
    </div>
    <div class="m honor">
      <h3 class="name">荣誉资质</h3>
      <div class="content">
        <van-swipe :loop="false" :width="150">
          <van-swipe-item v-for="item in honor" :key="item.id">
            <van-image :src="item.image"/>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <div class="m contact">
      <h3 class="name">联系我们</h3>
      <div class="content">
        <p class="img"><van-image :src="contact.addressImage"/></p>
        <ul>
          <li>
            <van-image :src="require('../../../assets/img/mobileIcon.png')"/>
            电话：{{contact.telephone}}
          </li>
          <li>
            <van-image :src="require('../../../assets/img/faxIcon.png')"/>
            传真：{{contact.fax}}
          </li>
          <li>
            <van-image :src="require('../../../assets/img/mailIcon.png')"/>
            邮箱：{{contact.mailbox}}
          </li>
          <li>
            <van-image :src="require('../../../assets/img/addressIcon.png')"/>
            公司地址：{{contact.companyAddress}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import mChildBanner from '../../../components/content/childBanner/mChildBanner'

import { Image as VanImage, Step, Steps, Swipe, SwipeItem } from 'vant';

export default {
  components: {
    mChildBanner,
    [VanImage.name]: VanImage,
    [Step.name]: Step,
    [Steps.name]: Steps,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
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
    type: {
      type: String,
      default() {
        return ""
      }

    }
  },
}
</script>

<style lang="less" scoped>
.name {
  font-size: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  padding: 0.8rem 0;
}
.introduce {
  .name {
    .img {
      margin-right: 0.2rem;
      width: 0.6rem;
    }
  }
  .content {
    color: #6a6a6a;
    font-size: 0.35rem;
  }
  padding-bottom: 1rem;
}
.course {
  padding-bottom: 1rem;
  .name {
    color: #ffffff;
  }
  background-image: url('../../../assets/img/aboutCourse_bg.jpg');
  background-size: 100% 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-clip:content-box;
  .content {
    .van-steps {
      background-color: transparent;
      .van-steps__items {
        .van-step {
          color: #ffffff;
        }
      }
    }
  }
}
.honor {
  .van-swipe {
    /deep/ .van-swipe__track {
      display: flex;
      align-items: center;
      .van-swipe-item {
        .van-image {
          padding-right: 0.2rem;
        }
      }
    }
  }
}
.contact {
  .content {
    ul li {
      display: flex;
      align-items: center;
      height: 0.8rem;
      .van-image {
        margin-right: 0.2rem;
      }
    }
  }
}
</style>
<template>
  <div class="news-content">
    <pc-home-content-title>
      <h2 :style="{color: theTitle.nameColor}" slot="name">{{theTitle.name}}</h2>
      <h4 slot="translation">{{theTitle.translation}}</h4>
    </pc-home-content-title>
    <div class="pc">
      <el-row :gutter="60">
        <el-col :span="8" v-for="item in news" :key="item.id">
          <div
            class="item"
            @mouseover="itemOver(item.id)"
            @mouseleave="itemLeave"
          >
            <a @click.prevent="goNewsContent(item.id)">
              <div class="box">
                <pc-image :src="item.bigPicture" height="250px" :active="homeImgId === item.id"/>
                <div class="text">
                  <div class="title">{{item.title}}</div>
                  <div class="date">{{item.time}}</div>
                  <div class="content">{{item.briefIntroduction}}</div>
                </div>
              </div>
            </a>
          </div>
        </el-col>
      </el-row>
      <el-button type="primary" @click="goNewsList">查看更多</el-button>
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
    news: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      theTitle: {
        name: '新闻资讯',
        translation: 'NEWS'
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
    goNewsContent(id) {
      let routeUrl = this.$router.resolve({
        path: 'contentDetail',
        query: {
          type: 'news',
          newsId: id
        }
      })
      window.open(routeUrl.href, '_blank');
    },
    goNewsList() {
      let routeUrl = this.$router.resolve({
        path: 'news'
      })
      window.open(routeUrl.href, '_blank');
    }
  }
}
</script>

<style lang="less" scoped>
.pc {
  .item {
    background-color: var(--home-element-background);
    .box {
      .text {
        color: #ffffff;
        padding: 0.40rem 0.45rem;
        .title {
          font-size: 18px;
        }
        .date {
          font-size: 16px;
          margin: 15px 0 20px;
        }
        .content {
          font-size: 14px;
          line-height: 20px;
          height: 60px;
          text-indent: 28px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
      }
    }
  }
  .el-button {
    font-size: 16.68px;
    display: block;
    margin: 63px auto 100px;
    background-color: #034db6;
    border: unset;
    border-radius: unset;
  }
}
</style>
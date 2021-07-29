<template>
<div>
  <footer v-if="$store.state.isMobile">
    <div class="pc">
      <el-row :gutter="10">
        <el-col :span="12">
          <div class="nav-item">
            <h3 class="collapsed">
              联系我们
            </h3>
            <ul>
              <li>电话：{{contact.telephone}}</li>
              <li>传真：{{contact.fax}}</li>
              <li>邮箱：{{contact.mailbox}}</li>
              <li>地址：{{contact.companyAddress}}</li>
            </ul>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="nav-item">
            <h3 class="collapsed">热门产品</h3>
            <ul>
              <li v-for="item in hotProduct" :key="item.id">
                <a @click.prevent="goContent('productCenter')">
                  {{item.productName}}
                </a>
              </li>
            </ul>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="nav-item">
            <h3 class="collapsed">解决方案</h3>
            <ul>
              <li v-for="item in hotSolution" :key="item.id">
                <a @click.prevent="goContent('theSolution')">
                  {{item.solutionName}}
                </a>
              </li>
            </ul>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="nav-item">
            <h3 class="collapsed">关于纽川</h3>
            <ul>
              <li><a @click.prevent="goAbout('introduce')">企业简介</a></li>
              <li><a @click.prevent="goAbout('course')">发展历程</a></li>
              <li><a @click.prevent="goAbout('honor')">荣誉资质</a></li>
              <li><a @click.prevent="goAbout('contact')">联系我们</a></li>
            </ul>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="copyright">
      <div class="copyright-text">
        <div>
          <span>
            Copyright Reserved ©纽川技术有限公司 版权所有
            <a href="https://beian.miit.gov.cn" target="_blank">湘ICP备2021010442号-1</a>
          </span>
        </div>
      </div>
    </div>
  </footer>
  <footer v-else>
    <div class="m">
      <van-collapse v-model="activeNames" accordion>
        <van-collapse-item title="联系我们">
          <ul>
            <li>电话：{{contact.telephone}}</li>
            <li>传真：{{contact.fax}}</li>
            <li>邮箱：{{contact.mailbox}}</li>
            <li>地址：{{contact.companyAddress}}</li>
          </ul>
        </van-collapse-item>
        <van-collapse-item title="热门产品">
          <ul>
            <li v-for="item in hotProduct" :key="item.id">
              <a @click.prevent="goContent('productCenter')">
                {{item.productName}}
              </a>
            </li>
          </ul>
        </van-collapse-item>
        <van-collapse-item title="解决方案">
          <ul>
            <li v-for="item in hotSolution" :key="item.id">
              <a @click.prevent="goContent('theSolution')">
                {{item.solutionName}}
              </a>
            </li>
          </ul>
        </van-collapse-item>
        <van-collapse-item title="关于纽川">
          <ul>
            <li><a @click.prevent="goAbout('introduce')">企业简介</a></li>
            <li><a @click.prevent="goAbout('course')">发展历程</a></li>
            <li><a @click.prevent="goAbout('honor')">荣誉资质</a></li>
            <li><a @click.prevent="goAbout('contact')">联系我们</a></li>
          </ul>
        </van-collapse-item>
      </van-collapse>
    </div>
    <div class="copyright copyright-m">
      <div class="copyright-text">
        <div>
            <p>Copyright Reserved ©纽川技术有限公司 版权所有</p>
            <a href="https://beian.miit.gov.cn">湘ICP备2021010442号-1</a>
        </div>
      </div>
    </div>
  </footer>
</div>
</template>

<script>
import { Collapse, CollapseItem } from 'vant';

export default {
  components: {
    [Collapse.name]: Collapse,
    [CollapseItem.name]: CollapseItem
  },
  props: {
    contact: {
      type: Object,
      default() {
        return {}
      }
    },
    hotProduct: {
      type: Array,
      default() {
        return []
      }
    },
    hotSolution: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      activeNames: [],
    }
  },
  methods: {
    goContent(type) {
      let routerUrl = this.$router.resolve({
        path: type
      })
      window.open(routerUrl.href, '_blank')
    },
    goAbout(type) {
      this.$router.push({
        path: 'aboutus',
      })
      this.$store.commit('updateAboutType',type)
    }
  }
}
</script>

<style lang="less" scoped>
footer {
  background-color: #122a62;
  color: #ffffff;
  .copyright {
    background-color: #151f37;
  }
  a {
    color: #ffffff;
  }
  .pc {
    padding: 80px 0;
    .collapsed {
      font-size: 30px;
      font-weight: 500;
      line-height: 50px;
    }
    ul {
      li {
        font-size: 16px;
        line-height: 30px;
      }
    }
  }
  .copyright {
    font-size: 16px;
    display: flex;
    justify-content: center;
    color: #ffffff;
    padding: 30px 0;
    span {
      margin: 0 24px;
    }
    .copyright-text {
      display: flex;
    }
  }
  .m {
    .van-collapse {
      /deep/ .van-cell,.van-cell__value--alone {
        color: #ffffff;
        background-color: transparent;
        padding: 10px 0;
      }
      /deep/ .van-cell::after {
        left: 0;
        right: 0;
        border-bottom: 1px solid #d4d4d4;
      }
      /deep/ .van-collapse-item__wrapper .van-collapse-item__content {
        background-color: transparent;
        padding: 10px 0;
      }
      .van-collapse-item--border::after {
        left: 0;
        right: 0;
      }
    }
  }
  .copyright-m {
    .copyright-text {
      a {
        text-align: center;
        display: block;
      }
    }
  }
}
</style>
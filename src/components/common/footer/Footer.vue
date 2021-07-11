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
                <a @click.prevent="goContent('chanping')">
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
                <a @click.prevent="goContent('fangan')">
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
            <a href="javascript;:">Copyright Reserved ©湖南纽川技术有限公司 版权所有</a>
            <a href="javascript;:">湘ICP备19005547号</a>
          </span>
        </div>
      </div>
    </div>
  </footer>
  <footer v-else>
    <div class="m">
      <van-collapse v-model="activeNames">
        <van-collapse-item title="联系我们">
          <van-cell v-for="(item, i) in contact" :key="i" :value="item.name + '：' + item.value"/>
        </van-collapse-item>
        <van-collapse-item v-for="(item, i) in footerNavData" :key="i" :title="item.title">
          <a @click.prevent="goContent(item.id)">
            <van-cell v-for="(childItem, i) in item.childNavData" :key="i" :value="childItem.name" />
          </a>
        </van-collapse-item>
      </van-collapse>
      <div class="copyright">
        <div class="copyright-text">
          <div>
            <span>©2021 华为技术有限公司</span>
            <span>
              <a href="http://beian.miit.gov.cn/">粤A2-20044005号</a>
              <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030702002388">粤公网安备  44030702002388号</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>
</template>

<script>
import { Collapse, CollapseItem, Cell, CellGroup } from 'vant';

export default {
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
  components: {
    [Collapse.name]: Collapse,
    [CollapseItem.name]: CollapseItem,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  },
  methods: {
    goContent(type) {
      this.$router.push({
        path: type
      })
    },
    goAbout(type) {
      this.$router.push({
        path: 'aboutus',
        query: {
          type: type
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
footer {
  background-color: #022066;
  color: #ffffff;
  .copyright {
    background-color: #02133e;
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
  .van-collapse {
    /deep/ .van-cell,.van-cell__value--alone {
      color: #ffffff;
      background-color: transparent;
    }
    /deep/ .van-cell::after {
      border-bottom: 1px solid #d4d4d4;
    }
    /deep/ .van-collapse-item__wrapper .van-collapse-item__content {
      background-color: transparent;
    }
  }
}
</style>
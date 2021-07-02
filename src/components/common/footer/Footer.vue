<template>
  <footer>
    <div class="m hidden-md hidden-lg">
      <van-collapse v-model="activeNames">
        <van-collapse-item title="联系我们">
          <van-cell v-for="(item, i) in contactData" :key="i" :value="item.name + '：' + item.value"/>
        </van-collapse-item>
        <van-collapse-item v-for="(item, i) in footerNavData" :key="i" :title="item.title">
          <a href="javascript:;">
            <van-cell v-for="(childItem, i) in item.childNavData" :key="i" :value="childItem.name" />
          </a>
        </van-collapse-item>
      </van-collapse>
      <div class="vant-copyright copyright">
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

    <div class="pc hidden-xs hidden-sm">
      <el-row :gutter="10">
        <el-col :span="12">
          <div class="nav-item">
            <h3 class="collapsed">
              联系我们
            </h3>
            <ul>
              <li v-for="(item, i) in contactData" :key="i">
                {{item.name}}：{{item.value}}
              </li>
            </ul>
          </div>
        </el-col>
        <el-col :span="4" v-for="(item, i) in footerNavData" :key="i" >
          <div class="nav-item">
            <h3 class="collapsed">
              {{item.title}}
            </h3>
            <ul>
              <li v-for="(childItem, i) in item.childNavData" :key="i">
                <a href="javascript:;">{{childItem.name}}</a>
              </li>
            </ul>
          </div>
        </el-col>
      </el-row>
      <div class="el-copyright copyright">
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
</template>

<script>
import { Collapse, CollapseItem, Cell, CellGroup } from 'vant';

export default {
  data() {
    return {
      activeNames: [],
      contactData: [
        {
          name: '电话',
          value: '0731-88888888'
        },
        {
          name: '传真',
          value: '0731-99999999'
        },
        {
          name: '邮箱',
          value: 'ABVDEF@KSJDJFHF.COM'
        },
        {
          name: '公司地址',
          value: '湖南省长沙市雨花区万家丽中路三段36号喜盈门商业广场'
        }
      ],
      footerNavData: [
        {
          title: '热门产品',
          childNavData:[
            {
              name: '产品名称'
            },
            {
              name: '产品名称'
            },
            {
              name: '产品名称'
            },
            {
              name: '产品名称'
            },
          ]
        },
        {
          title: '解决方案',
          childNavData:[
            {
              name: '方案名称'
            },
            {
              name: '方案名称'
            },
            {
              name: '方案名称'
            },
            {
              name: '方案名称'
            },
          ]
        },
        {
          title: '关于纽川',
          childNavData:[
            {
              name: '企业简介'
            },
            {
              name: '发展历程'
            },
            {
              name: '企业文化'
            },
            {
              name: '资质荣誉'
            },
          ]
        }
      ]
    }
  },
  components: {
    [Collapse.name]: Collapse,
    [CollapseItem.name]: CollapseItem,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
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
  .el-row {
    width: 80%;
    margin: 0 auto !important;
    padding: 1.7rem 0;
    .collapsed {
      font-size: 0.4rem;
      line-height: 0.4rem;
      font-weight: 500;
      margin-bottom: 0.33rem;
    }
    ul {
      li {
        margin-bottom: 0.2rem;
        font-size: 0.25rem;
        line-height: 0.3rem;
      }
    }
  }
  .el-copyright {
    font-size: 0.25rem;
    display: flex;
    justify-content: center;
    color: #ffffff;
    padding: 0.25rem 0;
    span {
      margin: 0 0.18rem;
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
  .vant-copyright {
    padding: 0.37rem 0;
    font-size: 0.22rem;
    line-height: 0.5rem;
    text-align: center;
    color: #ffffff;
    .copyright-text {
      padding: 0 0.27rem;
      margin: 0 auto;
      span {
        display: block;
      }
    }
  }
}
</style>
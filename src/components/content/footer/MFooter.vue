<template>
  <footer>
    <div class="footer-nav">
      <van-collapse v-model="activeNames" accordion>
        <van-collapse-item title="关于华为" name="1">
          <van-cell value="公司简介" />
          <van-cell value="可持续发展" />
          <van-cell value="信任中心" />
          <van-cell value="管理层信息" />
          <van-cell value="招贤纳士" />
        </van-collapse-item>
        <van-collapse-item title="新闻与活动" name="2">
          <van-cell value="新闻" />
          <van-cell value="展会活动" />
          <van-cell value="华为直播" />
          <van-cell value="媒体图库" />
        </van-collapse-item>
        <van-collapse-item title="发现" name="3">
          <van-cell value="成功故事" />
          <van-cell value="行业洞察" />
          <van-cell value="出版物" />
        </van-collapse-item>
        <van-collapse-item title="我们的产品" name="4">
          <van-cell value="个人及家庭产品" />
          <van-cell value="企业业务产品" />
          <van-cell value="运营商网络产品" />
          <van-cell value="华为云服务" />
        </van-collapse-item>
        <van-collapse-item title="技术支持" name="5">
          <van-cell value="消费者技术支持" />
          <van-cell value="华为云技术支持" />
          <van-cell value="企业技术支持" />
          <van-cell value="运营商技术支持" />
          <van-cell value="产品安全通告" />
        </van-collapse-item>
      </van-collapse>
    </div>
    <div class="copyright">
      <div class="copyright-text">
        <div>
          <span>©2021 华为技术有限公司</span>
          <span>
            <a href="http://beian.miit.gov.cn/">粤A2-20044005号</a>
            <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030702002388">粤公网安备  44030702002388号</a>
          </span>
        </div>
        <div class="line"></div>
        <ul class="list-unstyled">
          <li>
            <a href="javascript:;">联系我们</a>
          </li>
          <li>
            <a href="javascript:;">法律声明</a>
          </li>
          <li>
            <a href="javascript:;">隐私保护</a>
          </li>
          <li>
            <a href="javascript:;">除名查询</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      activeNames: ['1'],
    }
  }
}
</script>

<style lang="less" scoped>
footer{
  background-color: #f2f2f2;
  .footer-nav {
    /deep/ .van-cell {
      background-color: transparent;
    }
    /deep/ .van-cell::after {
      border-bottom: 1px solid #d4d4d4;
    }
    /deep/ .van-collapse-item__wrapper .van-collapse-item__content {
      background-color: transparent;
    }
  }
  .copyright {
    padding: 20px 0;
    font-size: 12px;
    line-height: 2em;
    text-align: center;
    background-color: #e6e6e6;
    color: #333333;
    .copyright-text {
      padding: 0 15px;
      margin: 0 auto;
      span {
        display: block;
      }
    }
    .list-unstyled {
      margin-top: 7px;
      li {
        display: inline-block;
        margin: 8px;
      }
    }
  }
}
</style>
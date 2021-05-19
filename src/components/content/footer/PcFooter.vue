<template>
  <footer>
    <div class="footer-nav">
      <el-row :gutter="10">
        <el-col :sm="{span: '4-8'}">
          <div class="nav-item">
            <h3 class="collapsed">
              关于华为
            </h3>
            <ul>
              <li>
                <a href="javascript:;">公司简介</a>
              </li>
              <li>
                <a href="javascript:;">可持续发展</a>
              </li>
              <li>
                <a href="javascript:;">信任中心</a>
              </li>
              <li>
                <a href="javascript:;">管理层信息</a>
              </li>
              <li>
                <a href="javascript:;">招贤纳士</a>
              </li>
            </ul>
          </div>
        </el-col>
        <el-col :sm="{span: '4-8'}">
          <div class="nav-item">
            <h3 class="collapsed">
              我们的产品
            </h3>
            <ul>
              <li>
                <a href="javascript:;">个人及家庭产品</a>
              </li>
              <li>
                <a href="javascript:;">企业业务产品</a>
              </li>
              <li>
                <a href="javascript:;">运营商网络产品</a>
              </li>
              <li>
                <a href="javascript:;">华为云服务</a>
              </li>
            </ul>
          </div>
        </el-col>
        <el-col :sm="{span: '4-8'}">
          <div class="nav-item">
            <h3 class="collapsed">
              新闻与活动
            </h3>
            <ul>
              <li>
                <a href="javascript:;">新闻</a>
              </li>
              <li>
                <a href="javascript:;">展会活动</a>
              </li>
              <li>
                <a href="javascript:;">华为直播</a>
              </li>
              <li>
                <a href="javascript:;">媒体图库</a>
              </li>
            </ul>
          </div>
        </el-col>
        <el-col :sm="{span: '4-8'}">
          <div class="nav-item">
            <h3 class="collapsed">
              发现
            </h3>
            <ul>
              <li>
                <a href="javascript:;">成功故事</a>
              </li>
              <li>
                <a href="javascript:;">行业洞察</a>
              </li>
              <li>
                <a href="javascript:;">出版物</a>
              </li>
            </ul>
          </div>
        </el-col>
        <el-col :sm="{span: '4-8'}">
          <div class="nav-item">
            <h3 class="collapsed">
              技术支持
            </h3>
            <ul>
              <li>
                <a href="javascript:;">消费者技术支持</a>
              </li>
              <li>
                <a href="javascript:;">华为云技术支持</a>
              </li>
              <li>
                <a href="javascript:;">企业技术支持</a>
              </li>
              <li>
                <a href="javascript:;">运营商技术支持</a>
              </li>
              <li>
                <a href="javascript:;">产品安全通告</a>
              </li>
            </ul>
          </div>
        </el-col>
      </el-row>
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

}
</script>

<style lang="less" scoped>
footer{
  background-color: #f2f2f2;
  .footer-nav {
    width: 85%;
    margin: 0 auto;
    padding: 48px 0 34px 0;
    border-bottom: 1px solid #e2e2e2;
    margin-bottom: 38px;
    .nav-item {
      .collapsed {
        font-size: 0.9375em;
        line-height: 25px;
        font-family: Microsoft YaHei, Arial, Helvetica, sans-serif !important;
        font-weight: bold;
        margin-bottom: 18px
      }
      ul {
        li {
          margin-bottom: 15px;
          a {
            font-size: 0.8125em;
            line-height: 1.5em;
            color: #595757;
          }
        }
      }
    }
  }
  .copyright {
    font-size: 0.8125em;
    display: flex;
    justify-content: center;
    color: #666;
    line-height: 30px;
    background-color: #e6e6e6;
    padding: 10px 0;
    a {
      color: #666;
    }
    span {
      margin: 0 10px;
    }
    .copyright-text {
      display: flex;
    }
    .line {
      width: 1px;
      height: 14px;
      background: #c2c3c3;
      margin: 8px 15px;
    }
    .list-unstyled {
      li {
        display: inline-block;
        margin: 0 10px;
      }
    }
  }
  .el-col-sm-4-8 {
    width: 20%;
  }
}
</style>
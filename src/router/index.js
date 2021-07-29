import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home/home'),
    meta: { 
      title: '官方-纽川技术有限公司'
    }
  },
  {
    path: '/productCenter',
    name: 'productCenter',
    component: () => import('../views/product/productCenter'),
    meta: {
      title: '产品中心'
    }
  },
  {
    path: '/theSolution',
    name: 'theSolution',
    component: () => import('../views/product/theSolution'),
    meta: {
      title: '解决方案'
    }
  },
  {
    path: '/cases',
    name: 'cases',
    component: () => import('../views/cases/cases'),
    meta: {
      title: '成功案例'
    }
  },
  {
    path: '/contentDetail',
    name: 'contentDetail',
    component: () => import('../views/contentDetail/contentDetail'),
    meta: {
      title: '成功案例'
    }
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('../views/news/news'),
    meta: {
      title: '新闻资讯'
    }
  },
  {
    path: '/cooperation',
    name: 'cooperation',
    component: () => import('../views/cooperation/cooperation'),
    meta: {
      title: '生态合作'
    }
  },
  {
    path: '/cooperationDetail',
    name: 'cooperationDetail',
    component: () => import('../views/cooperationDetail/cooperationDetail'),
    meta: {
      title: '生态合作'
    }
  },
  {
    path: '/aboutus',
    name: 'about',
    component: () => import('../views/about/about'),
    meta: {
      title: '关于纽川'
    }
  },
  {
    path: '/recruitments',
    name: 'recruitments',
    component: () => import('../views/recruitment/recruitments'),
    meta: {
      title: '招贤纳士'
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

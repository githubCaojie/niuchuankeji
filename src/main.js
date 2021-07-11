import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'lib-flexible/flexible' //引入rem自适应

// 按需引入element-ui
import 'element-ui/lib/theme-chalk/index.css';
import { Menu, Carousel, CarouselItem, Submenu, MenuItem, Row, Col, Image, Button, Breadcrumb,  BreadcrumbItem, Pagination, Steps, Step, Collapse, CollapseItem, Link } from 'element-ui';
Vue.use(Menu);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(Row);
Vue.use(Col);
Vue.use(Image);
Vue.use(Button);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Pagination);
Vue.use(Steps);
Vue.use(Step);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Link);
import 'vant/lib/index.css';

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
    if(to.name != 'about') {
        document.documentElement.scrollTop = 0
    }
    next()
})

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
}).$mount('#app')
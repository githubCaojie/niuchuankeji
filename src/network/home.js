import { request } from './request';

// 获取首页横幅
export function getHomeBanner() {
    return request({
        url: '/api/get/homepage/carousel'
    })
}

// 获取首页产品方案
export function getHomeProduct() {
    return request({
        url: '/api/get/homepage/product'
    })
}

// 获取首页成功案例
export function getHomeCases() {
    return request({
        url: '/api/get/admin/successfulcases/1/7'
    })
}
// 获取首页新闻资讯
export function getHomeNews() {
    return request({
        url: '/api/get/homepage/news'
    })
}

// 获取首页关于我们简介
export function getCompany() {
    return request({
        url: '/api/get/homepage/company'
    })
}

// 获取首页生态合作伙伴
export function getPartner() {
    return request({
        url: '/api/get/homepage/cooperation'
    })
}
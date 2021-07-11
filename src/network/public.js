import { request } from './request';

// 获取导航
export function getNav() {
    return request({
        url: '/api/navigation/treeselect'
    })
}

// 获取联系我们
export function getCompanyContact() {
    return request({
        url: '/api/get/interface/companycontact'
    })
}

// 获取热门产品
export function getHotProduct() {
    return request({
        url: '/api/get/interface/hot/product'
    })
}

// 获取解决方案
export function getHotSolution() {
    return request({
        url: '/api/get/interface/hot/solution'
    })
}

// 获取招聘信息
export function getRecruit(page = 1, size = 8) {
    return request({
        url: '/api/get/recruit/' + page + '/' + size 
    })
}

import { request } from './request';

export function getHomeBanner() {
    return request({
        url: '/api/get/admin/carousel'
    })
}

export function getHomeProduct() {
    return request({
        url: '/api/get/admin/product/1/4'
    })
}

export function getHomeCases() {
    return request({
        url: '/api/get/admin/successfulcases/1/7'
    })
}

export function getHomeNews() {
    return request({
        url: '/api/get/admin/news/1/3'
    })
}

export function getCopperation() {
    return request({
        url: '/api/get/admin/ecologicalCooperation'
    })
}
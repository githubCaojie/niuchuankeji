import { request } from './request';

// 分页获取产品列表
export function getProductCenterContent(page = 1, size = 8) {
  return request({
    url: '/api/get/productplan/product/' + page +'/' + size
  })
}

// 分页获取解决方案列表
export function getTheSolutionContent(page = 1, size = 8) {
  return request({
    url: '/api/get/productplan/solution/' + page +'/' + size
  })
}
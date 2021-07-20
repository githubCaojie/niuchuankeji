import { request } from './request';

// 获取成功案例详情
export function getSuccessfulCasesDetail(id) {
  return request({
    url: '/api/get/successfulCases/detailed/' + id
  })
}

// 获取新闻资讯详情
export function getNewsInformationDeatil(id) {
  return request({
    url: '/api/get/newsInformation/detailed/' + id
  })
}

// 获取生态合作详情
export function getCooperteDetail(id) {
  return request({
    url: '/api/get/ecologicalCooperation/detailed/' + id
  })
}

// 获取指定产品详细信息
export function getProductDetailed(id) {
  return request({
    url: '/api/get/productplan/product/detailed/' + id
  })
}

// 获取指定方案详细信息
export function getTheSolutionDetailed(id) {
  return request({
    url: '/api/get/productplan/solution/detailed/' + id
  })
}
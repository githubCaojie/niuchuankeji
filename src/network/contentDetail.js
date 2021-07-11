import { request } from './request';

// 成功案例详情
export function getSuccessfulCasesDetail(id) {
  return request({
    url: '/api/get/successfulCases/detailed/' + id
  })
}

// 新闻资讯详情
export function getNewsInformationDeatil(id) {
  return request({
    url: '/api/get/newsInformation/detailed/' + id
  })
}

// 生态合作详情
export function getCooperteDetail(id) {
  return request({
    url: '/api/get/ecologicalCooperation/detailed/' + id
  })
}
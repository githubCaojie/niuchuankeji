import { request } from './request';

export function getSuccessfulCases(page = 1, size = 8) {
  return request({
    url: '/api/get/admin/successfulcases/' + page +'/' + size
  })
}

export function getSuccessfulCasesDetail(id) {
  return request({
    url: '/api/get/successfulCases/detailed/' + id
  })
}
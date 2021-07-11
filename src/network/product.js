import { request } from './request';

export function getProductCenterContent(page = 1, size = 8) {
  return request({
    url: '/api/get/productplan/product/' + page +'/' + size
  })
}

export function getTheSolutionNumber(page = 1) {
  return request({
    url: '/api/get/admin/solution/' + page
  })
}

export function getTheSolutionContent(page = 1, size = 8) {
  return request({
    url: '/api/get/admin/solution/' + page +'/' + size
  })
 }
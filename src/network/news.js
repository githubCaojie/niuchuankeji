import { request } from './request';

export function getNewsContent(page = 1, size = 8) {
  return request({
    url: '/api/get/newsInformation/' + page + '/' + size
  })
}
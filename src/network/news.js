import { request } from './request';

export function getNewsContent(page = 1, size = 8) {
  console.log(page,size)
  return request({
    url: '/api/get/newsInformation/' + page + '/' + size
  })
}
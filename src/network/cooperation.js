import { request } from './request';

export function getEcologicalCooperation() {
  return request({
    url: '/api/get/ecologicalCooperation'
  })
}
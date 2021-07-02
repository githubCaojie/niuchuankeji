import { request } from './request';

export function getNav() {
    return request({
        url: '/api/get/admin/navigation'
    })
}
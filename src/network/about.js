import { request } from './request';

// 获取公司简介
export function getAboutCompany() {
  return request({
    url: '/api/get/about/company'
  })
}

// 获取公司联系方式
export function getAboutCompanyContact() {
  return request({
    url: '/api/get/about/companycontact'
  })
}

// 获取公司历程
export function getAboutDevelopment() {
  return request({
    url: '/api/get/about/development'
  })
}

// 获取资质荣誉图
export function getAboutHonor() {
  return request({
    url: '/api/get/about/honor'
  })
}
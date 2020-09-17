import request from '../utils/request'

// 获取热门基金
export function getHotFund() {
  return request({
    url: `/fund/hot`,
    method: 'get',
  })
}

// 获取基金详情
export function getFundDetail(data){
  return request({
    url: `/fund/detail`,
    method: 'get',
    params: data
  })
}
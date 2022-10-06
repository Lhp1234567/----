import requests from '../api/requset'
// 统一接口管理
export const reqCategoryList =()=>{
    return requests({url:'/product/getBaseCategoryList',method:'get'})
}
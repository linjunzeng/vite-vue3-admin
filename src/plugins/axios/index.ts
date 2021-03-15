import axios from 'axios'
import { ElMessage } from 'element-plus'

const service = axios.create({
    // 请求头
    baseURL: '',
    // 超时设置
    timeout: 5000 
})

// 请求拦截
service.interceptors.request.use(
    config => {
        return config
    },
    error => {
        console.log(error)
        ElMessage.error('错误拦截');
        return Promise.reject(error)
    }
)

// 响应拦截
service.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        let status = error.response!.status || 500;
        let errorMsg = '';

        switch (status) {
            case 500:
                errorMsg = '500 网络错误'
                break;

            case 404:
                errorMsg = '404 接口不存在'
                break;

            case 401:
                errorMsg = '401 登录超时或无权限'
                break;
        }

        ElMessage.error(errorMsg);
        return Promise.reject(error)
    }
)

export function request({url, method, params = {}, data = {}, option = {}}){
    return new Promise((resolve, reject) => {
        service({
            url, 
            method,
            params,
            data,
            option
        })
        .then(response => {
            resolve(response)
        })
        .catch(err => {
            reject(err)
        })
    })
}


/**
 * 封装 get 方法
 * @param url
 * @param data
 * @returns {Promise}
 */

 export function fetch(url, params = {}, option = {}){
    return request({
        url,
        method: 'get',
        params,
        option
    })
}

/**
 * 封装 post 方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data = {}, option = {}){
    return request({
        url,
        method: 'post',
        data,
        option
    })
}
import { API_REGISTER, API_LOGIN, API_LOGOUT, API_GET_USERS }from '../config/api'
import axios from '../plugins/axios'


// 注册接口
export const REGISTER = (registerInfo) => {
    return axios.post(API_REGISTER, registerInfo)
}

// 登录接口
export const LOGIN = (loginInfo) => {
    return axios.post(API_LOGIN, loginInfo)
}

// 登出接口
export const LOGOUT = () => {
    return axios.post(API_LOGOUT)
}

// 获取好友列表
export const GET_USER_LIST = () => {
    return axios.get(API_GET_USERS)
}



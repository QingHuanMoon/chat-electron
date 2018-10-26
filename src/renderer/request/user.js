import {setJwtItem, getJwtToken, removeJwtToken } from "../lib/jwtToken";
import { checkStatus } from "../lib/utils";


// 注册
export const RegisterRequest = async (promise) => {
    try {
        let {data} = await promise
        return checkStatus(data)
    } catch (e) {
        throw Error(e);
    }
}


// 登录
export const LoginRequest = async (promise) => {
    try {
        let {data} = await promise
        if (data.status === 'success') {
            setJwtItem(data.data.token)
            $$$.$store.dispatch('AsetUserInfo', data)
        }
        return checkStatus(data)
    } catch (e) {
        throw Error(e);
    }
}

// 登出
export const LogoutRequest = async (promise) => {
    try {
        let {data} = await promise
        return checkStatus(data)
    } catch (e) {
        throw Error(e);
    }
}


// 获取好友列表
export const GetUserListRequest = async (promise) => {
    try {
        let {data} = await promise
        if(data.status === 'success') {
            $$$.$store.dispatch('AsetUserList', data.data)
        }
        return checkStatus(data)
    } catch (e) {
        throw Error(e);
    }
}

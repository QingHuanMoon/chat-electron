import {API_ADD_ROOM, API_GET_INVITATION_USERLIST, API_INVITE_USER, API_ROOM_USERLIST, API_GET_ROOM_LIST} from "../config/api";
import axios from '../plugins/axios'


// 创建群组
export const CREATE_ROOM = (userID, title) => {
    console.log('userid:' + userID, 'title:' + title)
    return axios.post(API_ADD_ROOM, {
        user_id: userID,
        title:  title,
    })
}

// 获取可邀请的用户
export const GET_INVITATION_USERLIST = (userID, roomID) => {
    return axios.get(API_GET_INVITATION_USERLIST, {
        user_id: userID,
        room_id: roomID
    })
}

// 邀请用户进入房间
export const INVITE_USER_TO_ROOM = (userID, title, invitationID, roomID) => {
    return axios.post(API_INVITE_USER, {
        user_id: userID,
        title:   title,
        invitation_id: invitationID,
        room_id: roomID
    })
}

// 获取当前房间的成员信息
export const GET_ROOM_USERLIST = (userID, roomID) => {
    return axios.get(API_ROOM_USERLIST, {
        user_id : userID,
        room_id : roomID
    })
}

// 获取该用户添加的所有房间列表
export const GET_ROOM_LIST = (userID) => {
    return axios.get(API_GET_ROOM_LIST, {
        user_id: userID
    })
}

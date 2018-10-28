import axios from '../../plugins/axios'
import {GET_USER_LIST} from "../../apis/user";
import {GetUserListRequest} from "../../request/user";


const state = {
    firendList: [],
}



const mutations = {
    // 设置好友列表

}

const actions = {
    // 获取好友列表, 并开始监听所有好友的频道
    AinitFirendAndListenAllChannel ({commit, dispatch}) {
        GetUserListRequest(GET_USER_LIST())
    }

}

export default {
    state, mutations, actions
}

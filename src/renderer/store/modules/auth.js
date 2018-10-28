import {REGISTER, LOGIN, LOGOUT} from "../../apis/user";
import {LoginRequest, RegisterRequest, LogoutRequest} from "../../request/user";
import {setJwtItem, getJwtToken, removeJwtToken} from "../../lib/jwtToken";

const state = {
    isLogin: false,
    userInfo: {
        id: '',
        name: '',
        email: '',
        avatar: '',
        is_active: '',
        is_online: ''
    }
}

const mutations = {
    MloginSuccess (state) {
        state.isLogin = true
        $$$.$store.dispatch('AconnectWs')
    },

    MloginFail (state) {
        state.isLogin = false
    },


    MsetUserInfo (state, {data}) {
        state.userInfo.id = data.data.id
        state.userInfo.name = data.data.name
    }
}

const actions = {
    // 注册
    AgoRegister ({commit, dispatch}, registerInfo) {
        RegisterRequest(REGISTER(registerInfo)).then(status => {
            if (status) {
                $$$.$router.push({name: 'Login'})
            }
        })
    },

    // 登录
    ALogin ({commit, dispatch}, loginInfo) {
        LoginRequest(LOGIN(loginInfo)).then(status => {
            if (status) {
                commit({
                    type: 'MloginSuccess'
                })
                $$$.$router.push({name: 'MessagePage'})
            }
        })
    },

    // 检查登录状态
    AcheckLoginStatus ({commit, dispatch}) {
        if (getJwtToken()) {
            commit({
                type: 'MloginSuccess'
            })
        }
    },

    Alogout ({commit, dispatch}) {
        LogoutRequest(LOGOUT()).then(status => {
            if (status) {
                removeJwtToken()
                commit({
                    type: 'MloginFail'
                })
                $$$.$store.dispatch('AcloseWs')
                $$$.$store.dispatch('AcancelInfo')
            }
        })
    }
}

export default {
    state, mutations, actions
}

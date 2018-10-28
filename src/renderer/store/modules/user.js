import {BASE_URL} from "../../config/site";
import {PrivateMsg, GroupMsg} from "../../channel";

const state = {
    messageList: [],
    contactList: [],
    ws: null,
    groupList:   [],
    userInfo:    {
        id: '',
        name: '',
        statusId: {
            currentTab: 1,
            currentMessage: 1,
            currentGroup: 1,
        }
    }
}



const mutations = {
    // Tab 切换
    MsetCurrentContact (state, {item}) {
        switch (state.userInfo.statusId.currentTab) {
            case 1:
                if (state.userInfo.statusId.currentMessage !== item.id) {
                    state.userInfo.statusId.currentMessage = item.id
                }
                let messageRes = state.messageList.find(contact => {
                    return contact.id === state.userInfo.statusId.currentMessage
                })
                messageRes.content = '0'
                break;
            case 2:
                if (state.userInfo.statusId.currentMessage !== item.id) {
                    state.messageList.push({
                        ...item,
                        room_id: $$$.$store.state.auth.userInfo.id > item.id ? `${item.id}&${$$$.$store.state.auth.userInfo.id}` : `${$$$.$store.state.auth.userInfo.id}&${item.id}`
                    })
                }
                state.userInfo.statusId.currentMessage = item.id
                let messageResult = state.messageList.find(contact => {
                    return contact.id === state.userInfo.statusId.currentMessage
                })
                messageResult.content = '0'
                $$$.$router.push({name: 'MessagePage'})
                document.querySelector('.MessagePage').click()
                break;
            case 3:
                state.userInfo.statusId.currentGroup = item.id
                let groupRes = state.groupList.find(contact => {
                    return contact.id === state.userInfo.statusId.currentGroup
                })
                groupRes.content = '0'
                break;
        }
    },
    // 设置当前 Tab
    MsetCurrentTab (state, {index}) {
        state.userInfo.statusId.currentTab = index + 1
    },
    MsetUserList (state, {data}) {
        data.forEach(user => {
            state.contactList.push({
                id: user.id,
                name: user.name,
                avatar: '',
                msgList: [],
                content: "0"
            })
        })
        console.log(state.groupList)
    },
    MsetRoomList (state, {data}) {
        state.groupList = []
        data.forEach(room => {
            state.groupList.push({
                id: room.room_id,
                name: room.title,
                avatar: room.cover,
                number: room.number,
                msgList: [],
                content: '0'
            })
        })
    },
    MsetWs (state, {ws}) {
        state.ws = ws
    },
    MsetUserInMessage (state, {item}) {
        let id = item
        let user = state.contactList.find(item => item.id === id)
        state.messageList.push({
            ...user,
        })
    },
    MconnectWs (state) {
        state.ws = new WebSocket(`ws://${BASE_URL}:9502`)
        state.ws.onopen = () =>  {
            state.ws.send(JSON.stringify({
                messageType: 0,
                user_id: $$$.$store.state.auth.userInfo.id,
                type: 'connect'
            }))
        }
        $$$.$store.dispatch('AJtStart')
    },
    // 设置自己的消息
    MsetSelfMessage (state, {data}) {
        let id = data.to_id
        let message = data.body
        let time = data.time
        let user = state.contactList.find(item => item.id === id)
        user.msgList.push({
            body: message,
            time: time,
            type: 'self'
        })
    },
    MsetMessageInUser (state, {item}) {
        let id = item.userID
        let message = item.message
        let time = item.time
        let user = state.contactList.find(item => item.id === id)
        user.msgList.push({
            body: message,
            time: time,
            type: 'other'
        })
        let msgUser = state.messageList.find(item => item.id === id)
        if (msgUser !== undefined && state.userInfo.statusId.currentMessage !== msgUser.id ) {
            let num = parseInt(msgUser.content)
            num++
            msgUser.content = '' + num
        }
    },
    McloseWs (state) {
        state.ws.close()
        console.log($$$.$router)
        $$$.$router.push({name: 'Login'})
    },

    MinitList (state) {
        state.contactList = []
        state.groupList = []
    },

    MJtStart (state) {
        state.ws.onmessage = (msg) => {
            let res = JSON.parse(msg.data)
            switch (res.type) {
                case 'private':
                    PrivateMsg(res)
                    break;
                case 'group':
                    GroupMsg(res)
            }
        }
        // 错误处理,断线重连
        state.ws.onclose = () => {
            if ($$$.$store.state.user.ws !== 1 && $$$.$store.state.auth.isLogin) {
                $$$.$store.dispatch('AconnectWs')
            }
        }
    },
    McancelInfo (state) {
        state.contactList = []
        state.groupList = []
    }
}

const actions = {
    // Tab 切换
    AchangeCurrentContact ({commit, dispatch}, {item}) {
        commit({
            type: 'MsetCurrentContact',
            item
        })
    },
    // 设置当前 Tab
    AchangeTab ({commit, dispatch}, index) {
        commit({
            type: 'MsetCurrentTab',
            index
        })
    },
    // 设置好友列表
    AsetUserList({commit, dispatch}, data) {
        commit({
            type: 'MsetUserList', data
        })
    },
    // 设置群组列表
    AsetRoomList({commit, dispatch}, data) {
        commit({
            type: 'MsetRoomList', data
        })
    },
    // 设置人员信息
    AsetUserInfo({commit, dispatch}, data) {
        commit({
            type: 'MsetUserInfo', data
        })
    },

    AWsIsConnect ({commit, dispatch}, ws) {
        commit({
            type: 'MsetWs', ws
        })
    },
    AsetUserInMessageList ({commit, dispatch}, item) {
        commit({
            type: 'MsetUserInMessage', item
        })
    },
    AsetMessageInUser ({commit, dispatch}, item) {
        commit({
            type: 'MsetMessageInUser', item
        })

    },
    AconnectWs ({commit, dispatch}) {
        commit({
            type: 'MconnectWs',
        })
    },

    AsetSelfMessage ({commit, dispatch}, data) {
        commit({
            type: 'MsetSelfMessage',
            data
        })
    },

    AcloseWs ({commit, dispatch}) {
        commit({
            type: 'McloseWs'
        })
    },

    // 开始监听消息
    AJtStart ({commit, dispatch}) {
        commit({
            type: 'MJtStart'
        })
    },

    AinitList ({commit, dispatch}) {
        commit({
            type: 'MinitList'
        })
    },

    // 退出清空好友列表
    AcancelInfo ({commit, dispatch}) {
        commit({
            type: 'McancelInfo'
        })
    }
}

export default {
    state, mutations, actions
}

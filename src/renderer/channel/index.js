// 私聊
export const PrivateMsg = (msg) => {
    // 发信息用户 ID
    let userID = msg.user[0].id
    // 判断用户是否存在消息列表
    let userItem  = $$$.$store.state.user.messageList.find(item => item.id === userID)
    if (userItem === undefined) {
        let userID = msg.user[0].id
        let message = msg.message
        let time = msg.created_at
        // 推送消息
        $$$.$store.dispatch('AsetMessageInUser', {userID, message, time})
        // 推送到聊天列表
        $$$.$store.dispatch('AsetUserInMessageList', userID)
    } else {
        let userID = msg.user[0].id
        let message = msg.message
        let time = msg.created_at
        $$$.$store.dispatch('AsetMessageInUser', {userID, message, time})
        // 存在
    }

}


// 群聊
export const GroupMsg = (msg) => {

}




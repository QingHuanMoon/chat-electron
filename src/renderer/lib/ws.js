import {BASE_URL} from "../config/site";

class ChatWebSocket {
    constructor () {
        this.ws = new WebSocket(`ws://${BASE_URL}:9502`)
        return this.ws
    }

    // 连接
    Connect () {

    }

    // 发送
    Send (data) {
        this.ws.send(JSON.stringify(data))
    }

    // 关闭
    Close () {
        this.ws.close(600, {})
    }
}

export default ChatWebSocket

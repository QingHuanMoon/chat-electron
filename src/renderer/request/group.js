import { checkStatus } from "../lib/utils";


// 获取当前用户所有房间列表
export const GetRoomList = async (promise) => {
    try {
        let {data} = await promise
        if(data.status === 'success') {
            $$$.$store.dispatch('AsetRoomList', data.data)
        }
        return checkStatus(data)
    } catch (e) {
        throw Error(e);
    }
}

// 创建一个房间
export const CreateRoom = async (promise) => {
    try {
        let {data} = await promise
        if(data.status === 'success') {
            $$$.$store.dispatch('AinitRoomList')
        }
        return checkStatus(data)
    } catch (e) {
        throw Error(e);
    }
}

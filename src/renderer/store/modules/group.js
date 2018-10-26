import {GET_ROOM_LIST} from "../../apis/group";
import {GetRoomList} from "../../request/group";
import {CREATE_ROOM} from "../../apis/group";
import {CreateRoom} from "../../request/group";

const state = {

}

const mutations = {

}

const actions = {
    AinitRoomList ({commit, dispatch}, {user_id}) {
        GetRoomList(GET_ROOM_LIST(user_id))
    },

    AcreateRoom ({commit, dispatch}, {id, title}) {
        CreateRoom(CREATE_ROOM(id, title))
    }
}

export default {
    state, mutations, actions
}

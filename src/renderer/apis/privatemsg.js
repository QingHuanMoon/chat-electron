import {API_PRIVATE_MESSAGE_SEND} from "../config/api";
import axios from '../plugins/axios'

export const PRIVATE_MESSAGE_SEND = (info) => {
    return axios.post(API_PRIVATE_MESSAGE_SEND, info)
}


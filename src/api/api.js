import {
    DELETE,
    get,
    post,
    PUT,
    PATCH
} from '../axios/http.js'
import GLOBAL from '../common/global.js'

export const get_example = (params) => get(`${GLOBAL.HOME}/auth/login/`, params)
export const DetailLook = (data) => post(`${GLOBAL.HOME}/ticket/check/`, data)

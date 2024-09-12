import {
    DELETE,
    get,
    post,
    PUT,
    PATCH
} from '../axios/http.js'
import GLOBAL from '../common/global.js'

export const get_example = (params) => post(`${GLOBAL.HOME}/auth/login`, params)
// export const DetailLook = (params) => get(`${GLOBAL.HOME}/ticket/check`, params)
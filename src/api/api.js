import {
    DELETE,
    get,
    post,
    PUT,
    PATCH
} from '../axios/http.js'
import GLOBAL from '../common/global.js'

export const get_example = (params) => post(`${GLOBAL.HOME}/auth/login`, params)

// 获取adb脚本列表
export const get_adbScripts_list = () => get(`${GLOBAL.HOME}/adb_scripts/getInfo`)
// 提交adb脚本
export const add_adbScripts_list = (params) => post(`${GLOBAL.HOME}/adb/addInfo`, params)
// 获取热点列表
export const get_hotNews_list = () => get(`${GLOBAL.HOME}/news/getHotNews`)

import axios from 'axios';



axios.defaults.withCredentials = true;
const waiting_time = 10000;

// 请求拦截器
axios.interceptors.request.use(config => {
    if (config.method !== 'post') {
      config.headers = {
        'Content-Type': 'application/json; text/event-stream; charset=UTF-8',
        'Cache-Control': 'no-cache'
        // withCredentials: true
      };
    }
    if (config.headers['Content-Type'] !== 'multipart/form-data') {
      config.data = JSON.stringify(config.data);
    }
  
    return config;
  }, error => {
    return Promise.reject(error);
});

// 创建 Axios 实例
const apiClient = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL || 'http://localhost:5000',
  timeout: 90000, // 请求超时时间（毫秒）
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

const codeMessage = {
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    302: '登录认证已失效，请重新登录',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: 'Lang.pc.401',
    402: '登录状态过期，请重新登录。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    405: '请今天当前接口的请求方式。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。'
}

// 响应拦截器
axios.interceptors.response.use(response => {
    return Promise.resolve(response.data);
}, error => {
    if (error.response) {
        let code = error.response.status;
        switch (code) {
            case 401:
                alert('401 error');
                break;
            case 402:
                alert('Payment required');
                break;
            case 500:
                alert('Server error. Please try again later.');
                break;
            default:
                alert('An unexpected error occurred');
        }
    }
    return Promise.reject(error);
});


export const post = (url, data = {}, headers = null) => {
    if (!headers) {
      headers = {
        'X-Requested-With': 'XMLHttpRequest', // 请求头表示这是一个 AJAX 请求
        'Content-Type': 'application/json; text/event-stream; charset=UTF-8', // 请求体的内容类型
        'Accept': 'multipart/form-data;', // 期望服务器返回的内容类型
        'Cache-Control': 'no-cache', // 禁用缓存
        withCredentials: true // 允许跨域请求时发送 cookies
      }
    }
    return axios({
      method: 'post',
      url,
      data: data,
      timeout: waiting_time, // 请求超时时间
      headers: headers
    })
}
export const PATCH = (url, data = {}, headers = null) => {
    if (!headers) {
      headers = {
        'X-Requested-With': 'XMLHttpRequest', // requestedWith 为 XMLHttpRequest 则为 Ajax 请求。
        'Content-Type': 'application/json; text/event-stream; charset=UTF-8',
        'Accept': 'multipart/form-data;',
        'Cache-Control': 'no-cache',
        withCredentials: true
      }
    }
    return axios({
      method: 'patch',
      url,
      data: data,
      timeout: waiting_time,
      headers: headers
    })
}

export const DELETE =
  (url, data = {}) => {
    return axios({
      method: 'delete',
      url,
      data: data,
      timeout: waiting_time,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        withCredentials: true
      }
    })
}
export const PUT =
  (url, data = {}) => {
    return axios({
      method: 'put',
      url,
      data: data,
      timeout: waiting_time,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        withCredentials: true
      }
    })
}

export const get =
  (url, params = {}, config = {}) => {
    return axios({
      method: 'get',
      url,
      params, // get 请求时带的参数
      withCredentials: true,
      timeout: waiting_time,
      ...config // get('/api/users', { id: 123 }) 会发起请求 /api/users?id=123
    })
}

export default apiClient;

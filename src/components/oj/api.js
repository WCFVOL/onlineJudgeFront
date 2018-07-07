import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$http = axios
// axios.defaults.xsrfHeaderName = 'X-CSRFToken'
// axios.defaults.xsrfCookieName = 'token'
// 后端往cookie写token 请求默认带token
var URL_API = '/api/'
var URL_USER = '/filter_api/'
export default {
  getSubmission (id) {
    return ajax(URL_USER + 'code/' + id, 'get')
  },
  getSubmissions () {
    return ajax(URL_API + 'submissions', 'get')
  },
  submit (data) {
    return ajax(URL_USER + 'submit', 'post', {
      data
    })
  },
  getProblem (data) {
    return ajax(URL_API + 'problem', 'post', {
      data
    })
  },
  getProfile () {
    return ajax(URL_USER + 'profile', 'get')
  },
  getAnnouncementList () {
    return ajax(URL_API + 'announcements', 'get')
  },
  getProblemList () {
    return ajax(URL_API + 'problem_list', 'post')
  },
  register (data) {
    return ajax(URL_API + 'register', 'post', {
      data
    })
  },
  signIn (data) {
    return ajax(URL_API + 'login', 'post', {
      data
    })
  }
}
function ajax (url, method, options) {
  if (options !== undefined) {
    var {params = {}, data = {}} = options
  } else {
    params = data = {}
  }
  return new Promise((resolve, reject) => {
    axios({
      url,
      method,
      params,
      data
    }).then(res => {
      // API正常返回(status=20x), 是否错误通过有无error判断
      if (res.data.error !== null) {
        resolve(res)
      }
    }, res => {
      // API请求异常，一般为Server error 或 network error
      reject(res)
      Vue.prototype.$error(res.data)
    })
  })
}
import Api from '@/services/Api.js'

export default {
  register (credientals) {
    return Api().post('register', credientals)
  },
  login (credientals) {
    return Api().post('login', credientals)
  }
}


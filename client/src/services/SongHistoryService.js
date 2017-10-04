import Api from '@/services/Api.js'

export default {
  index (params) {
    return Api().get('history', {
      params: params
    })
  },
  post (params) {
    return Api().post('history', params)
  }
}

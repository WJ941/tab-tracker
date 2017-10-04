import Api from '@/services/Api.js'

export default {
  index (params) {
    return Api().get('bookmarks', {
      params: params
    })
  },
  post (params) {
    return Api().post('bookmarks', params)
  },
  delete (bookmarkid) {
    return Api().delete(`bookmarks/${bookmarkid}`)
  }
}

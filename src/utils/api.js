import axios from './axios'


export function fetchQQ(params) {
  return axios({
    url: '/soso/fcgi-bin/client_search_cp',
    params,
    methods: 'GET'
  })
}

export function fetchCate(params) {
  return axios({
    url: '/db/cates.json',
    params,
    methods: 'GET'
  })
}

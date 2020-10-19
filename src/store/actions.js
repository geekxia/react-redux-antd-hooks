import {
  fetchQQ,
  fetchCate
} from '@/utils/api'

export const CHANGE_MSG = 'CHANGE_MSG'
export const GET_QQ_MUSIC = 'GET_QQ_MUSIC'
export const GET_ALL_CATES = 'GET_ALL_CATES'

// action生成器
// action不是函数，action实际上是一个 plain object
export function changeMsgAction(payload) {
  return {
    type: CHANGE_MSG,
    payload
  }
}

// redux默认只支持同步生成的action，不支持异步生成的action
// 使用redux-thunk把一个异步的action转化多个同步的action
export function changeMsgAsyncAction(payload) {
  return dispatch=>{
    setTimeout(()=>{
      dispatch({
        type: CHANGE_MSG,
        payload
      })
    }, 2000)
  }
}

export function getQqMusicAction(params) {
  return dispatch=>{
    fetchQQ(params).then(res=>{
      dispatch({
        type: GET_QQ_MUSIC,
        payload: res.song.list
      })
    })
  }
}

// 从public中获取cates品类假数据
export function getCatesActions(params) {
  return dispatch=>{
    fetchCate(params).then(res=>{
      console.log('-----', res)
      dispatch({
        type: GET_ALL_CATES,
        payload: res
      })
    })
  }
}

import {
  fetchQqMusic
} from '@/utils/api'

export function changeMsg(payload) {
  return {
    type: 1,
    payload
  }
}

// export function changeMsgAsync(payload) {
//   setTimeout(()=>{
//     return {
//       type: 2,
//       payload
//     }
//   }, 2000)
// }
export function changeMsgAsync(payload) {
  return (dispatch)=>{
    setTimeout(()=>{
      dispatch({
        type: 2,
        payload
      })
    }, 2000)
  }
}

export function getQqMusic(params) {
  return (dispatch)=>{
    fetchQqMusic(params).then(res=>{
      console.log('qq music', res)
      dispatch({
        type: 3,
        payload: res.song.list
      })
    })
  }
}

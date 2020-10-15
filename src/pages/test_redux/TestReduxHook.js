import React, { useState, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeMsg, getQqMusic } from '@/store/actions'

export default (props) => {
  const [newMsg, setNewMsg] = useState('')
  const msg = useSelector(store=>store.study.msg)
  const list = useSelector(store=>store.study.list)
  const dispatch = useDispatch()
  const changeMsg2 = useCallback((payload)=>dispatch(changeMsg(payload)), [dispatch])
  const getQqMusic2 = useCallback((params)=>dispatch(getQqMusic(params)), [dispatch])

  useEffect(()=>{
    let params = {}
    let str = 'ct=24&qqmusic_ver=1298&new_json=1&remoteplace=txt.yqq.song&searchid=70287049684716577&t=0&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p=1&n=10&w=%E7%8E%8B%E8%8F%B2&g_tk_new_20200303=5381&g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0'
    str.split('&').map(ele=>{
      let arr = ele.split('=')
      params[arr[0]] = arr[1]
    })
    params.w = decodeURI(params.w)
    getQqMusic2(params)
    return undefined
  },[])

  function clickHandle() {
    // dispatch({type:1, payload:'hello 2009'})
    if(!newMsg.trim()) return
    changeMsg2(newMsg)
    setNewMsg('')
  }
  function createMusicList() {
    return list.map(ele=>(
      <div key={ele.id}>{ele.name}</div>
    ))
  }
  console.log('test redux hooks', props)
  return (
    <div>
      <h1>测试 react-redux hooks</h1>
      <h2>{msg}</h2>
      <input type="text" value={newMsg} onChange={(e)=>setNewMsg(e.target.value)}/>
      <button onClick={clickHandle}>修改msg</button>
      <hr/>
      { createMusicList() }
    </div>
  )
}

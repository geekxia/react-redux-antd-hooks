import React, { useEffect } from 'react'

import { connect } from 'react-redux'
// 语法：connect(fn1, fn2)(Home)
import {
  changeMsg,
  changeMsgAsync,
  getQqMusic
} from '@/store/actions'

// 作用：把状态管理工具中的state映射到当前组件的props
function mapStateToProps(store) {
  return {
    msg: store.study.msg,
    list: store.study.list,
    foo: store.study.foo
  }
}

// action 实际就是 {type, payload}
// action 是给 dispatch(action) 来使用
// dispatch是一个函数，作用是派发action到store中
function mapActionsToProps(dispatch) {
  return {
    // changeMsg: function(payload) {
    //   dispatch({type:1, payload})
    // }
    changeMsg: (payload)=>dispatch(changeMsg(payload)),
    changeMsgAsync: payload=>dispatch(changeMsgAsync(payload)),
    getQqMusic: params=>dispatch(getQqMusic(params))
  }
}


function Home(props) {
  useEffect(()=>{
    let params = {}
    let str = 'ct=24&qqmusic_ver=1298&new_json=1&remoteplace=txt.yqq.song&searchid=70287049684716577&t=0&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p=1&n=10&w=%E7%8E%8B%E8%8F%B2&g_tk_new_20200303=5381&g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0'
    str.split('&').map(ele=>{
      let arr = ele.split('=')
      params[arr[0]] = arr[1]
    })
    params.w = decodeURI(params.w)
    props.getQqMusic(params)
    return undefined
  }, [])
  console.log('home props', props)
  // 修改msg
  function handleClick() {
    // props.changeMsg('hello 2007')
    props.changeMsgAsync('hello 2008')
  }
  function createMusicList() {
    return props.list.map(ele=>(
      <div key={ele.id}>{ele.title}</div>
    ))
  }
  return (
    <div>
      <h1>首页</h1>
      <h2>{props.msg}</h2>
      <button onClick={handleClick}>修改msg</button>
      <hr/>
      { createMusicList() }
    </div>
  )
}

export default connect(mapStateToProps, mapActionsToProps)(Home)

// export default connect(mapStateToProps, mapActionsToProps)((props)=>())

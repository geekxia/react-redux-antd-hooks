import React from 'react'

import { connect } from 'react-redux'
// 语法：connect(fn1, fn2)(Home)

// 作用：把状态管理工具中的state映射到当前组件的props
function mapStateToProps(store) {
  return {
    msg: store.msg,
    list: store.list,
    foo: store.foo
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
    changeMsg: (payload)=>dispatch({type:1, payload})
  }
}


function Home(props) {
  console.log('home props', props)
  // 修改msg
  function handleClick() {
    props.changeMsg('hello 2007')
  }
  return (
    <div>
      <h1>首页</h1>
      <h2>{props.msg}</h2>
      <button onClick={handleClick}>修改msg</button>
    </div>
  )
}

export default connect(mapStateToProps, mapActionsToProps)(Home)

// export default connect(mapStateToProps, mapActionsToProps)((props)=>{
//   console.log('home props', props)
//   return (
//     <div>
//       <h1>首页</h1>
//     </div>
//   )
// })

let initState = {
  msg: 'hello 2006',
  list: [],
  foo: true
}

// reducer，是一个纯函数
// state是可被组件共享的状态数据
// action是改变state的信号（信息）

// JSON.parse(JSON.stringify())
// Object.assign()
// {...{}}

export default function reducer(state=initState, action) {
  // console.log('----------', action)
  // 深复制（副本、快照）
  let newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case 1:
      newState.msg = action.payload
      return newState
    case 2:
      newState.msg = action.payload
      return newState
    case 3:
      newState.list = action.payload
      return newState
    default:
      return newState
  }
}

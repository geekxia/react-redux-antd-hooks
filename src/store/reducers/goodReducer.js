import {
  GET_ALL_CATES,
  GET_GOOD_LIST,
  GET_GOOD_INFO,
  CLEAR_GOOD_INFO
} from '../actions'

let initState = {
  msg: 'hello good',
  cateList: [],
  good: {},
  goodInfo: {}
}

export default function reducer(state=initState, action) {
  let newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case GET_ALL_CATES:
      newState.cateList = action.payload
      return newState
    case GET_GOOD_LIST:
      newState.good = action.payload
      return newState
    case GET_GOOD_INFO:
      newState.goodInfo = action.payload
      return newState
    case CLEAR_GOOD_INFO:
      newState.goodInfo = {}
      return newState
    default:
      return newState
  }
}

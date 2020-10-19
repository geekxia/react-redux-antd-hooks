import {
  GET_ALL_CATES
} from '../actions'

let initState = {
  msg: 'hello good',
  cateList: []
}

export default function reducer(state=initState, action) {
  let newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case GET_ALL_CATES:
      newState.cateList = action.payload
      return newState
    default:
      return newState
  }
}

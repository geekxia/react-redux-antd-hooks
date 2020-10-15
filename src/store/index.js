import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux'

import thunk from 'redux-thunk'

import musicReducer from './reducers/music'
import todoReducer from './reducers/todo'
import studyReducer from './reducers/study'

const rootReducer = combineReducers({
  study: studyReducer,
  music: musicReducer,
  todo: todoReducer
})

// 存储数据的中心
const store = createStore(rootReducer, applyMiddleware(thunk))
export default store

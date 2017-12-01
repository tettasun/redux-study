import { combineReducers } from 'redux'
import data from './pannel'
import yclick from './ybutton'

const combinedReducer = combineReducers({
  data,
  yclick
})

export default combinedReducer

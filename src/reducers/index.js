import { combineReducers } from 'redux'
import pannelData from './pannel'
import yclick from './ybutton'

const combinedReducer = combineReducers({
  pannelData,
  yclick
})

export default combinedReducer

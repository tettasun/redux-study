import { combineReducers } from 'redux'
import counterA from './counterA'
import counterB from './counterB'

const countApp = combineReducers({
  counterA,
  counterB
})

export default countApp

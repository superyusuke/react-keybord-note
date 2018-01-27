import { combineReducers } from 'redux'

import { colorSwitch } from './colorSwitch'
import { keyboards } from './keyboards'

export const keyNote = combineReducers({
  colorSwitch,
  keyboards,
})

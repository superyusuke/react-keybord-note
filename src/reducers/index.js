import { combineReducers } from 'redux'

import { colorSwitch } from './colorSwitch'
import { keys } from './keys'

export const keyNote = combineReducers({
  colorSwitch,
  keys,
})

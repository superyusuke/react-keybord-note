import { combineReducers } from 'redux'

import { colorSwitch } from './colorSwitch'
import { keyboards } from './keyboards'
import {textMode} from './textMode'

export const keyNote = combineReducers({
  colorSwitch,
  keyboards,
  textMode,
})

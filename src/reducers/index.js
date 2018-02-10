import { combineReducers } from 'redux'

import { colorSwitch } from './colorSwitch'
import { keyboards } from './keyboards'
import { textMode } from './textMode'
import { editMode } from './editMode'

export const keyNote = combineReducers({
  colorSwitch,
  keyboards,
  textMode,
  editMode,
})

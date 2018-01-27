import React from 'react'

import VisualizeKeyboards from './containers/VisualizeKeyboards'
import ColorModeSwitcher from './components/ColorModeSwitcher'
import AddKeyboardButton from './components/AddKeyboardButton'

import './assets/screen.css'

export const App = () => {
  return [
    <ColorModeSwitcher key='color-switch'/>,
    <AddKeyboardButton key='add-key'/>,
    <VisualizeKeyboards key='vis-key'/>,
  ]
}

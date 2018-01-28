import React from 'react'

import VisualizeKeyboards from './containers/VisualizeKeyboards'
import ColorModeSwitcher from './components/ColorModeSwitcher'
import AddKeyboardButton from './components/AddKeyboardButton'
import TransposeButton from './components/TransposeButton'

import './assets/screen.css'

export const App = () => {
  return [
    <TransposeButton key='transpose'/>,
    <ColorModeSwitcher key='color-switch'/>,
    <AddKeyboardButton key='add-key'/>,
    <VisualizeKeyboards key='vis-key'/>,
  ]
}

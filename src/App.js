import React from 'react'

import VisualizeKeyboards from './containers/VisualizeKeyboards'
import ColorModeSwitcher from './components/ColorModeSwitcher'
import AddDeleteKeyboardButton from './components/AddDeleteKeyboardButton'
import TransposeButton from './components/TransposeButton'

import './assets/screen.css'

export const App = () => {
  return [
    <AddDeleteKeyboardButton key='add-key'/>,
    <TransposeButton key='transpose'/>,
    <ColorModeSwitcher key='color-switch'/>,
    <VisualizeKeyboards key='vis-key'/>,
  ]
}

import React from 'react'

import VisualizeKeyboards from './containers/VisualizeKeyboards'
import ColorModeSwitcher from './components/ColorModeSwitcher'
import AddDeleteKeyboardButton from './components/AddDeleteKeyboardButton'
import TransposeButton from './components/TransposeButton'

import './assets/screen.css'

export const App = () => {
  return [
    <div className='ui-container'>
      <TransposeButton key='transpose'/>
      <AddDeleteKeyboardButton key='add-key'/>
      <ColorModeSwitcher key='color-switch'/>
    </div>,
    <VisualizeKeyboards key='vis-key'/>
  ]
}

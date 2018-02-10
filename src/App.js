import React from 'react'

import VisualizeKeyboards from './containers/VisualizeKeyboards'
import EditModeSwitcher from './components/EditModeSwitcher'
import ColorModeSwitcher from './components/ColorModeSwitcher'
import TextModeSwitcher from './components/TextModeSwitcher'
import AddDeleteKeyboardButton from './components/AddDeleteKeyboardButton'
import TransposeButton from './components/TransposeButton'

import './assets/screen.css'

export const App = () => {
  return (
    <div>
      <div className='ui-container'>
        <TransposeButton key='transpose'/>
        <AddDeleteKeyboardButton key='add-key'/>
        <EditModeSwitcher key='edit-switch'/>
        <ColorModeSwitcher key='color-switch'/>
        <TextModeSwitcher key='text-mode-switch'/>
      </div>
      <VisualizeKeyboards key='vis-key'/>
    </div>

  )
}

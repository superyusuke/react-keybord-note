import React from 'react'

import VisualizeKeyboards from './containers/VisualizeKeyboards'
import { ColorModeSwitcher } from './components/ColorModeSwitcher'
import './assets/screen.css'

export const App = () => {
  return [<VisualizeKeyboards key='vis-key'/>,<ColorModeSwitcher/>]
}

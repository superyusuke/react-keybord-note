import React from 'react'

import VisualizeKeyboards from './containers/VisualizeKeyboards'
import './assets/screen.css'
import { connect } from 'react-redux'

const App = ({change}) => {
  return [<VisualizeKeyboards key='vis-key'/>, <button key='button' onClick={change}>チェンジキーボード</button>]
}

const mapDispatchToProps = dispatch => {
  return {
    change: () => {
      dispatch({type: 'CHANGE'})
    },
  }
}

export default connect(null, mapDispatchToProps)(App)

import React from 'react'

import Keyboard from './components/Keyboard'
import './assets/screen.css'
import { connect } from 'react-redux'

const App = ({keys}) => {
  return <Keyboard keys={keys}/>
}

const mapStateToProps = (state) => {
  return {
    keys: state,
  }
}

export default connect(mapStateToProps)(App)

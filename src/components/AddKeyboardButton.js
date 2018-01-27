import React from 'react'
import {connect} from 'react-redux'

const AddKeyboardButton = ({addKeyboard}) => <button onClick={addKeyboard}>Add Keyboard</button>

const mapDispatchToProps = dispatch => {
  return {
    addKeyboard: () => dispatch({type: 'ADD_KEYBOARD'})
  }
}

export default connect(null, mapDispatchToProps)(AddKeyboardButton)

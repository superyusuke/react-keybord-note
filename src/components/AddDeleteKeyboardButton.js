import React from 'react'
import { connect } from 'react-redux'

const AddDeleteKeyboardButton = ({addKeyboard, deleteKeyboard}) => [
  <button onClick={addKeyboard} key='add'>Add Keyboard</button>,
  <button onClick={deleteKeyboard} key='delete'>Delete Keyboard</button>
]

const mapDispatchToProps = dispatch => {
  return {
    addKeyboard: () => dispatch({type: 'ADD_KEYBOARD'}),
    deleteKeyboard: () => dispatch({type: 'DELETE_KEYBOARD'})
  }
}

export default connect(null, mapDispatchToProps)(AddDeleteKeyboardButton)

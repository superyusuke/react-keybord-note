import React from 'react'
import { connect } from 'react-redux'

const AddDeleteKeyboardButton = ({addKeyboard, deleteKeyboard}) => (
  <div className='add-delete-keyboard'>
    <div className='add-delete-keyboard__add' onClick={addKeyboard} key='add'>Add Keyboard</div>
    <div className='add-delete-keyboard__delete' onClick={deleteKeyboard} key='delete'>Delete Keyboard</div>
  </div>
)

const mapDispatchToProps = dispatch => {
  return {
    addKeyboard: () => dispatch({type: 'ADD_KEYBOARD'}),
    deleteKeyboard: () => dispatch({type: 'DELETE_KEYBOARD'})
  }
}

export default connect(null, mapDispatchToProps)(AddDeleteKeyboardButton)

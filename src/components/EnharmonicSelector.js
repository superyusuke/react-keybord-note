import React from 'react'
import { connect } from 'react-redux'

const EnharmonicSelector = ({editMode ,onChange, enharmonic, keyboardIndex}) => {
  if (editMode === 'view') {
    return null
  }
  return (
    <select
      onChange={(e) => onChange({value: e.target.value, keyboardIndex})}
      value={enharmonic}
      className='enharmonic-selector'>
      <option key='flat' value='flat'>b</option>
      <option key='sharp' value='sharp'>#</option>
    </select>)
}

const mapStateToProps = state => {
  return {
    editMode: state.editMode,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChange: ({value, keyboardIndex}) => dispatch({type: 'CHANGE_ENHARMONIC', value, keyboardIndex})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EnharmonicSelector)

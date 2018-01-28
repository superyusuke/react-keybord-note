import React from 'react'
import { connect } from 'react-redux'

const EnharmonicSelector = ({onChange, enharmonic, keyboardIndex}) => {
  console.log('index', keyboardIndex)
  return (
    <select
      onChange={(e) => onChange({value: e.target.value, keyboardIndex})}
      value={enharmonic}
      className={`root-selector--`}>
      <option key='flat' value='flat'>b</option>
      <option key='sharp' value='sharp'>#</option>
    </select>)
}

const mapDispatchToProps = dispatch => {
  return {
    onChange: ({value, keyboardIndex}) => dispatch({type: 'CHANGE_ENHARMONIC', value, keyboardIndex})
  }
}

export default connect(null, mapDispatchToProps)(EnharmonicSelector)

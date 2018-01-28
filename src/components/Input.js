import React from 'react'
import { connect } from 'react-redux'

const Input = ({value, name, onChange, keyboardIndex}) => {
  return (
    <input
      name={name}
      onChange={(e) => onChange({event: e, keyboardIndex, name})}
      value={value}/>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    onChange: ({event, keyboardIndex,name}) => dispatch({
      type: 'INPUT_CHANGE',
      value: event.target.value,
      keyboardIndex,
      name
    })
  }
}

export default connect(null, mapDispatchToProps)(Input)

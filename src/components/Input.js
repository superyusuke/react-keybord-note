import React from 'react'
import { connect } from 'react-redux'

const Input = ({editMode, value, name, className, onChange, keyboardIndex}) => {
  if (editMode === 'edit') {
    return (
      <input
        name={name}
        onChange={(e) => onChange({event: e, keyboardIndex, name})}
        value={value}
        className={className}
      />
    )
  }

  if (editMode === 'view') {
    return <span className={`${className}--view`}>{value}</span>
  }
}

const mapStateToProps = state => {
  return {
    editMode: state.editMode,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChange: ({event, keyboardIndex, name}) => dispatch({
      type: 'INPUT_CHANGE',
      value: event.target.value,
      keyboardIndex,
      name
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Input)

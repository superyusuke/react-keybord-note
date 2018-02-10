import React from 'react'
import { connect } from 'react-redux'

const TextModeSwitcher = ({textMode, onChange}) => {
  return (
    <div>
      Text Mode:
      <label>
        <input
          type="radio"
          value={false}
          checked={textMode === false}
          onChange={(e) => {
            onChange(e.target.value)
          }}
        />
        able
      </label>
      <label>
        <input
          type="radio"
          value={true}
          checked={textMode === true}
          onChange={(e) => {
            onChange(e.target.value)
          }}
        />
        disable
      </label>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    textMode: state.textMode,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChange: (textMode) => dispatch({type: 'TEXT_MODE_SWITCH', textMode}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TextModeSwitcher)

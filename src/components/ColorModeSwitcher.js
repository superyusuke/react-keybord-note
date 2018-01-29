import React from 'react'
import { connect } from 'react-redux'

import { colorType } from '../constant/colorType'

const ColorModeSwitcher = ({colorSwitch, onChange}) => {
  return (
    <div>
      Color:
      <label>
        <input
          type="radio"
          value={colorType.PUSHED}
          checked={colorSwitch === colorType.PUSHED}
          onChange={(e) => {
            onChange(e.target.value)
          }}
        />
        Blue
      </label>
      <label>
        <input
          type="radio"
          value={colorType.ACCENT}
          checked={colorSwitch === colorType.ACCENT}
          onChange={(e) => {
            onChange(e.target.value)
          }}
        />
        Red
      </label>
      <label>
        <input
          type="radio"
          value={colorType.NONE}
          checked={colorSwitch === colorType.NONE}
          onChange={(e) => {
            onChange(e.target.value)
          }}
        />
        None
      </label>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    colorSwitch: state.colorSwitch,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChange: (color) => dispatch({type: 'COLOR_SWITCH', color}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorModeSwitcher)

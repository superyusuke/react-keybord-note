import React from 'react'
import { connect } from 'react-redux'

const FlatRootArray = [
  'C',
  'Db',
  'D',
  'Eb',
  'E',
  'F',
  'Gb',
  'G',
  'Ab',
  'A',
  'Bb',
  'B',
]

const SharpRootArray = [
  'C',
  'C#',
  'D',
  'D#',
  'E',
  'F',
  'F#',
  'G',
  'G#',
  'A',
  'A#',
  'B',
]

const RootSelector = ({enharmonic, keyboardIndex, selectedRoot, onChange}) => {
  const returnRootArray = (enharmonic) => {
    switch (enharmonic) {
      case 'flat':
        return FlatRootArray
      case 'sharp':
        return SharpRootArray
      default:
        return FlatRootArray
    }
  }
  return (
    <select
      onChange={(e) => onChange(
        {
          value: e.target.value,
          keyboardIndex,
        }
      )}
      value={selectedRoot}
      className={`root-selector--${keyboardIndex}`}>
      {returnRootArray(enharmonic).map((root, index) => <option key={index} value={index}>{root}</option>)}
    </select>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    onChange: ({value, keyboardIndex}) => dispatch({type: 'CHANGE_ROOT', value, keyboardIndex,})
  }
}

export default connect(null, mapDispatchToProps)(RootSelector)

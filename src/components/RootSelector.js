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

const RootSelector = ({editMode, enharmonic, keyboardIndex, selectedRoot, onChange}) => {
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

  const editModeConditional = editMode === 'edit'

  return (
    <span>
      { editModeConditional &&
        <select
          className='root-selector'
          onChange={(e) => onChange(
            {
              value: e.target.value,
              keyboardIndex,
            }
          )}
          value={selectedRoot}
        >
          {returnRootArray(enharmonic).map((root, index) => <option key={index} value={index}>{root}</option>)}
        </select>
      }
      { !editModeConditional &&
        <span>{returnRootArray(enharmonic)[selectedRoot]}</span>
      }
    </span>

  )
}

const mapStateToProps = state => {
  return {
    editMode: state.editMode,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChange: ({value, keyboardIndex}) => dispatch({type: 'CHANGE_ROOT', value, keyboardIndex,})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RootSelector)

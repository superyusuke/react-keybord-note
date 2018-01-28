import React from 'react'

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

export const RootSelector = ({enharmonic, keyboardIndex, selectedRoot}) => {
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
    <select value={selectedRoot} className={`root-selector--${keyboardIndex}`} >
      {returnRootArray(enharmonic).map((root, index) => <option value={index}>{root}</option>)}
    </select>
  )
}


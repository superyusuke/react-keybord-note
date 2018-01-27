import React from 'react'
import VisualizeKeys from '../containers/Visualizekeys.js'

export const Keyboards = ({keyboards}) => {
  return keyboards.map((keyboard, index)=> {
    return <VisualizeKeys  keyboardIndex={index} keys={keyboard} key={index}/>
  })
}

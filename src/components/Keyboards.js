import React from 'react'
import VisualizeKeyboard from '../containers/VisualizeKeyboard'

export const Keyboards = ({keyboards}) => {
  return keyboards.map((keyboard, index)=> {
    return <VisualizeKeyboard  keyboardIndex={index} keys={keyboard} key={index}/>
  })
}

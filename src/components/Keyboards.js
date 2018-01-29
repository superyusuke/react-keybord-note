import React from 'react'
import VisualizeKeys from '../containers/Visualizekeys.js'

export const Keyboards = ({keyboards}) => {
  return (
    <div className='keyboard-area'>
      {keyboards.map((keyboard, index) => {
        return <VisualizeKeys keyboardIndex={index} keyboard={keyboard} key={index}/>
      })}
    </div>
  )
}

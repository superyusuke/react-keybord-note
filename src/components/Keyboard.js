import React from 'react'

import { keyColorPattern } from '../constant/keyColorPattern'
import { colorType } from '../constant/colorType'

export const Keyboard = ({keys, colorSwitch,onChange, onClick}) => {
  const getStyles = (color) => {
    if (color === colorType.PUSHED) {
      return {backgroundColor: '#6261b9'}
    }

    if(color === colorType.ACCENT){
      return {background: 'blue'}
    }
  }

  return (
    <div className='keyboard'>
      {keys.map((key, i) => {
          return (
            <div
              style={getStyles(key.colorType)}
              onClick={() => onClick(
                {index: i, color: colorSwitch}
              )}
              key={i}
              className={`keyboard__key keyboard__key--${i} keyboard__key--${keyColorPattern[i]
              ? 'white'
              : 'black'}`
            }>
              <input onChange={(e) => onChange(e,
                i)} key={i} value={key.text} className={`keyboard__input keyboard__input--${keyColorPattern[i]
                ? 'white'
                : 'black'}`}/>
            </div>
          )
        },
      )}
    </div>
  )
}

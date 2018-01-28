import React from 'react'

import { keyColorPattern } from '../constant/keyColorPattern'
import { colorType } from '../constant/colorType'
import { RootSelector } from '../components/RootSelector'

export const Keyboard = ({keyboardIndex, keyboard, colorSwitch, onChange, onClick}) => {
  const getStyles = (color) => {
    if (color === colorType.PUSHED) {
      return {backgroundColor: '#6261b9'}
    }

    if (color === colorType.ACCENT) {
      return {background: '#c34543'}
    }
  }

  const onKeyClick = ({keyIndex, color}) => {
    onClick(
      {
        keyboardIndex,
        keyIndex,
        color: color === colorSwitch ? colorType.NONE : colorSwitch,
      },
    )
  }

  return (
    [
      <RootSelector selectedRoot={keyboard.selectedRoot} enharmonic={keyboard.enharmonic} keyboardIndex={keyboardIndex}/>,
      <div className='keyboard'>
        {keyboard.keys.map((key, i) => {
            return (
              <div style={getStyles(key.colorType)} onClick={() => onKeyClick({
                keyIndex: i,
                color: key.colorType,
              },)} key={i}
                   className={`keyboard__key keyboard__key--${i} keyboard__key--${keyColorPattern[i]
                     ? 'white'
                     : 'black'}`
                   }>
                <input
                  onChange={(e) => onChange({
                      event: e,
                      keyIndex: i,
                      keyboardIndex,
                    },
                  )}
                  key={i}
                  value={key.text}
                  className={`keyboard__input keyboard__input--${keyColorPattern[i]
                    ? 'white'
                    : 'black'}`}/>
              </div>
            )
          },
        )}
      </div>]
  )
}

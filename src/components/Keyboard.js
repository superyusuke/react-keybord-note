import React from 'react'

import classNames from 'classnames'

import { keyColorPattern } from '../constant/keyColorPattern'
import { colorType } from '../constant/colorType'
import RootSelector from '../components/RootSelector'
import EnharmonicSelector from '../components/EnharmonicSelector'
import Input from '../components/Input'

export const Keyboard = ({editMode, keyboardIndex, keyboard, colorSwitch, textMode, onChange, onClick}) => {
  const getStyles = (color) => {
    if (color === colorType.PUSHED) {
      return {backgroundColor: '#6261b9'}
    }

    if (color === colorType.ACCENT) {
      return {background: '#c34543'}
    }
  }

  const onKeyClick = ({keyIndex, color}) => {
    if (colorSwitch === colorType.NONE) {
      return
    }
    onClick(
      {
        keyboardIndex,
        keyIndex,
        color: color === colorSwitch ? colorType.NONE : colorSwitch,
      },
    )
  }

  console.log(editMode)

  return (
    <div className='keyboard-container' key={keyboardIndex}>
      <div className='keyboard-ui'>
        <div
          className={classNames('keyboard-ui__left', {'keyboard-ui__left--view': editMode === 'view'})}
        >
          <RootSelector
            selectedRoot={keyboard.selectedRoot}
            enharmonic={keyboard.enharmonic}
            keyboardIndex={keyboardIndex}
            key='root-selector'/>
          <Input
            keyboardIndex={keyboardIndex}
            value={keyboard.quality}
            name='quality'
            className='quality-input'
          />
          <Input
            keyboardIndex={keyboardIndex}
            value={keyboard.romanNumeral}
            name='romanNumeral'
            className='roman-numeral-input'
          />
        </div>
        <div className='keyboard-ui__right'>
          <EnharmonicSelector
            keyboardIndex={keyboardIndex}
            enharmonic={keyboard.enharmonic}
            key='enharmonic'/>
        </div>
      </div>
      <div className='keyboard' key='keyboard'>
        {keyboard.keys.map((key, i) => {
            return (
              <div
                style={getStyles(key.colorType)}
                onClick={() => onKeyClick({
                  keyIndex: i,
                  color: key.colorType,
                },)}
                key={i}
                className={`keyboard__key keyboard__key--${i} keyboard__key--${keyColorPattern[i]
                  ? 'white'
                  : 'black'}`
                }>
                <input
                  disabled={textMode}
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
          }
        )}
      </div>
    </div>
  )
}

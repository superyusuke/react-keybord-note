import React from 'react'

import { keyColorPattern } from '../constant/keyColorPattern'
import { colorClass } from '../constant/colorClass'

export const Keyboard = ({keys, onChange, onClick}) => {
  return (
    <div className='keyboard'>
      {keys.map((key, i) => (
        <div onClick={() => onClick(
          i)} key={i} className={`keyboard__key keyboard__key--${i} keyboard__key--${keyColorPattern[i]
          ? 'white'
          : 'black'} keyboard__key--${key.colorClass}`
        }>
          <input onChange={(e) => onChange(e,
            i)} key={i} value={key.text} className={`keyboard__input keyboard__input--${keyColorPattern[i]
            ? 'white'
            : 'black'}`}/>
        </div>),
      )}
    </div>
  )
}

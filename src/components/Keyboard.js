import React from 'react'

import { keyColorPattern } from '../constant/keyColorPattern'

export const Keyboard = ({keys, onChange}) => {
  return (
    <div className='keyboard'>
      {keys.map((key, i) => (
        <div key={i} className={`keyboard__key keyboard__key--${i} keyboard__key--${keyColorPattern[i]
          ? 'white'
          : 'black'}`}>
          <input onChange={(e) => onChange(e, i)} key={i} value={key} className={`keyboard__input keyboard__input--${keyColorPattern[i]
            ? 'white'
            : 'black'}`}/>
        </div>),
      )}
    </div>
  )
}

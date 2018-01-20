import React from 'react'

const keyArray = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23]

const renderKeys = (keyArray) => {
  const keys = keyArray.map((o, i) => {
    return <div className={`keyboard__key keyboard__key--${i}`}>{o}</div>
  })

  return <div className='keyboard'>{keys}</div>
}

export const Keyboard = () => {
  return renderKeys(keyArray)
}

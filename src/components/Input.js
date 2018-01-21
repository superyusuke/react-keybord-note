import  React from 'react'

const keyColorPattern = [
  true,
  false,
  true,
  false,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  true,
  false,
  true,
  false,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
]

export const Input = ({index, content, onChange}) => {
  return <input onChange={onChange} key={index} value={content} className={`keyboard__input keyboard__input--${keyColorPattern[index]
    ? 'white'
    : 'black'}`}
  />
}


{/*<div key={i} className={`keyboard__key keyboard__key--${i} keyboard__key--${keyColorPattern[i]*/}
  {/*? 'white'*/}
  {/*: 'black'}`}>*/}
  {/*<Input onChange={change} index={i} content={o}/>*/}
{/*</div>*/}

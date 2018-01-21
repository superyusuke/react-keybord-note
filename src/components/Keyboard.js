import React from 'react'
import { connect } from 'react-redux'

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

const Keyboard = ({keys, change}) => {
  if (!keys) {
    return null
  }

  const renderKeys = (keyArray) => {
    const clickAlert = () => {
      //console.log(change)
      change()
    }

    const keys = keyArray.map((o, i) => {
      return (
        <div key={i} className={`keyboard__key keyboard__key--${i} keyboard__key--${keyColorPattern[i]
          ? 'white'
          : 'black'}`}>
          <input key={i} onChange={clickAlert} value={o} className={`keyboard__input keyboard__input--${keyColorPattern[i]
            ? 'white'
            : 'black'}`}/>
        </div>
      )
    })

    return <div className='keyboard'>{keys}</div>
  }

  return renderKeys(keys)
}

const mapStateToProps = (state) => {
  return {
    keysss: 'sss',
  }
}

const mapDispatchToProps = dispatch => {
  return {
    change: () => {
      dispatch({type: 'CHANGE', index: 1})
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Keyboard)

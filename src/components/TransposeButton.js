import React from 'react'
import { connect } from 'react-redux'

export const TransposeButton = ({onTransposeClick}) => {
  return (
    <div className='transpose'>
      <div className='transpose__minus' onClick={() => onTransposeClick('MINUS')}>Minus</div>
      <div className='transpose__plus' onClick={() => onTransposeClick('PLUS')}>Plus</div>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    onTransposeClick: (direction) => dispatch({type: 'TRANSPOSE', direction})
  }
}

export default connect(null, mapDispatchToProps)(TransposeButton)

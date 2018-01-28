import { connect } from 'react-redux'

import { Keyboard } from '../components/Keyboard'

const mapStateToProps = state => {
  return {
    colorSwitch: state.colorSwitch,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChange: ({event, keyIndex, keyboardIndex}) => {
      dispatch(
        {
          type: 'TEXT_CHANGE',
          text: event.target.value,
          keyIndex,
          keyboardIndex,
        },
      )
    },
    onInputChange: ({event, keyboardIndex}) => {
      dispatch(
        {
          type: 'INPUT_CHANGE',
          text: event.target.value,
          name: event.target.name,
          keyboardIndex,
        },
      )
    },
    onClick: ({keyboardIndex, keyIndex, color}) => {
      dispatch({type: 'COLOR_CHANGE', keyboardIndex, keyIndex, color})
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Keyboard)

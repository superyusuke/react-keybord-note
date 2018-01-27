import { connect } from 'react-redux'

import { Keyboard } from '../components/Keyboard'

const mapStateToProps = state => {
  return {
    colorSwitch: state.colorSwitch,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChange: (event, index) => {
      dispatch(
        {
          type: 'TEXT_CHANGE',
          text: event.target.value,
          index: index,
        },
      )
    },
    onClick: ({keyboardIndex, keyIndex, color}) => {
      dispatch({type: 'COLOR_CHANGE', keyboardIndex, keyIndex, color})
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Keyboard)

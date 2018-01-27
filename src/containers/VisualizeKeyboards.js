import { connect } from 'react-redux'

import { Keyboard } from '../components/Keyboard'

const mapStateToProps = state => {
  return {
    keys: state.keys,
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
    onClick: ({index, color}) => {
      dispatch({type: 'COLOR_CHANGE', index, color})
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Keyboard)

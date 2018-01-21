import { connect } from 'react-redux'

import { Keyboard } from '../components/Keyboard'

const mapStateToProps = state => {
  return {
    keys: state,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChange: (event, index) => {
      dispatch(
        {
          type: 'CHANGE',
          text: event.target.value,
          index: index,
        },
      )
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Keyboard)

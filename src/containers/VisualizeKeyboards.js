import { connect } from 'react-redux'

import { Keyboard } from '../components/Keyboard'

const mapStateToProps = state => {
  return {
    keys: state,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChange: (index) => {
      dispatch({type: 'CHANGE', index: index})
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Keyboard)

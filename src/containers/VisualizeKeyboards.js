import { connect } from 'react-redux'

import { Keyboards } from '../components/Keyboards'

const mapStateToProps = state => {
  return {
    keyboards: state.keyboards,
  }
}
export default connect(mapStateToProps)(Keyboards)

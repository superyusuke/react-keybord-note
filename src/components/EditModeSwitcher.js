import React from 'react'
import { connect } from 'react-redux'

const EditModeSwitcher = ({editMode, onChange}) => {
  return (
    <div>
      Edit Mode:
      <label>
        <input
          type="radio"
          value="edit"
          checked={editMode === 'edit'}
          onChange={(e) => {
            onChange(e.target.value)
          }}
        />
        Edit
      </label>
      <label>
        <input
          type="radio"
          value="view"
          checked={editMode === 'view'}
          onChange={(e) => {
            onChange(e.target.value)
          }}
        />
        View
      </label>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    editMode: state.editMode,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChange: (editMode) => dispatch({type: 'EDIT_MODE_SWITCH', editMode}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditModeSwitcher)

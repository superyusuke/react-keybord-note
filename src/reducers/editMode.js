// input の disabled の値のため、state = true => disabled
export const editMode = (state = 'edit', action) => {
  switch (action.type) {
    case 'EDIT_MODE_SWITCH':
      return action.editMode
    default:
      return state
  }
}

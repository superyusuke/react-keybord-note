// input の disabled の値のため、state = true => disabled
export const textMode = (state = true, action) => {
  switch (action.type) {
    case 'TEXT_MODE_SWITCH':
      return action.textMode === 'true'
    default:
      return state
  }
}

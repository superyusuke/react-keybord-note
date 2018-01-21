const keyArray = new Array(24).fill('')

export const keys = (state = keyArray, action) => {
  switch (action.type) {
    case 'CHANGE':
      return state.map((key, index) => {
        return index === action.index ? action.text : key
      })
    default:
      return state
  }
}

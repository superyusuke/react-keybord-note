const keyArray = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
]

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

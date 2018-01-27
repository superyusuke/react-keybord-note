import { colorType } from '../constant/colorType'

const keyObject = {
  text: '',
  colorType: colorType.NORMAL,
}

const keyArray = new Array(24).fill(keyObject)

export const keys = (state = keyArray, action) => {
  switch (action.type) {
    case 'TEXT_CHANGE':
      return state.map((key, index) => {
        return index === action.index ? Object.assign({}, key,
          {text: action.text}) : key
      })
    case 'COLOR_CHANGE':
      console.log(state)
      console.log(action.color)
      return state.map((key, index) => {
        return index === action.index ? Object.assign({}, key,
          {colorType: action.color,}) : key
      })
    default:
      return state
  }
}

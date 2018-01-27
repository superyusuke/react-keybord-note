import { colorType } from '../constant/colorType'

const keyObject = {
  text: '',
  colorType: colorType.NORMAL,
}

const keyArray = new Array(24).fill(keyObject)

export const keyboards = (state = [keyArray], action) => {
  switch (action.type) {
    case 'ADD_KEYBOARD':
      return [...state, keyArray]
    case 'TEXT_CHANGE':
      console.log(action)
      return state.map((keyboard, keyboardIndex) => {
        if (keyboardIndex === action.keyboardIndex) {
          return keyboard.map((key, index) => {
            return index === action.keyIndex ? Object.assign({}, key,
              {text: action.text}) : key
          })
        }
        return keyboard
      })
    case 'COLOR_CHANGE':
      return state.map((keyboard, keyboardIndex) => {
        if (keyboardIndex === action.keyboardIndex) {
          return keyboard.map((key, index) => {
            return index === action.keyIndex ? Object.assign({}, key,
              {colorType: action.color,}) : key
          })
        }
        return keyboard
      })
    default:
      return state
  }
}

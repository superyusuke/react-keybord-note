import { colorType } from '../constant/colorType'

const keyObject = {
  text: '',
  colorType: colorType.NORMAL,
}

const keyArray = new Array(24).fill(keyObject)
const keyboardObject = {
  keys: keyArray,
  enharmonic: 'flat',
  selectedRoot: 0,
}

export const keyboards = (state = [keyboardObject], action) => {
  switch (action.type) {
    case 'CHANGE_ENHARMONIC':
      console.log(action)
      return state.map((keyboard, keyboardIndex) => {
        if (keyboardIndex === action.keyboardIndex) {
          return {
            ...keyboard,
            enharmonic: action.value,
          }
        }
        return keyboard
      })
    case 'CHANGE_ROOT':
      console.log(action.value)
      return state.map((keyboard, keyboardIndex) => {
        if (keyboardIndex === action.keyboardIndex) {
          return {
            ...keyboard,
            selectedRoot: action.value,
          }
        }
        return keyboard
      })
    case 'TRANSPOSE':
      if (action.direction === 'MINUS') {
        return state.map(keyboard => {
          return {
            ...keyboard,
            keys: [...keyboard.keys.slice(1), ...keyboard.keys.slice(0, 1)]
          }
        })
      }
      if (action.direction === 'PLUS') {
        return state.map(keyboard => {
          return {
            ...keyboard,
            keys: [...keyboard.keys.slice(keyboard.keys.length - 1), ...keyboard.keys.slice(0, keyboard.keys.length - 1)]
          }
        })
      }
      break
    case 'ADD_KEYBOARD':
      return [...state, keyboardObject]
    case 'TEXT_CHANGE':
      return state.map((keyboard, keyboardIndex) => {
        if (keyboardIndex === action.keyboardIndex) {
          return {
            ...keyboard,
            keys: keyboard.keys.map((key, index) => {
              return index === action.keyIndex ? Object.assign({}, key,
                {text: action.text}) : key
            })
          }
        }
        return keyboard
      })
    case 'COLOR_CHANGE':
      return state.map((keyboard, keyboardIndex) => {
        if (keyboardIndex === action.keyboardIndex) {
          return {
            ...keyboard,
            keys: keyboard.keys.map((key, index) => {
              return index === action.keyIndex ? Object.assign({}, key,
                {colorType: action.color,}) : key
            })
          }
        }
        return keyboard
      })
    default:
      return state
  }
}

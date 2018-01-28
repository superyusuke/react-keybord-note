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

const plusSelectedRootValue = (selectedRoot) => {
  if (parseInt(selectedRoot, 10) < 11) {
    return parseInt(selectedRoot, 10) + 1
  }
  if (parseInt(selectedRoot, 10) === 11) {
    return 0
  }
}

const minusSelectedRootValue = (selectedRoot) => {
  if (0 < parseInt(selectedRoot, 10)) {
    return parseInt(selectedRoot, 10) - 1
  }
  if (parseInt(selectedRoot, 10) === 0) {
    return 11
  }
}

export const keyboards = (state = [keyboardObject], action) => {
  switch (action.type) {
    case 'CHANGE_ENHARMONIC':
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
      console.log(state)
      if (action.direction === 'MINUS') {
        return state.map(keyboard => {
          return {
            ...keyboard,
            keys: [...keyboard.keys.slice(1), ...keyboard.keys.slice(0, 1)],
            selectedRoot: minusSelectedRootValue(keyboard.selectedRoot)
          }
        })
      }
      if (action.direction === 'PLUS') {
        return state.map(keyboard => {
          return {
            ...keyboard,
            keys: [...keyboard.keys.slice(keyboard.keys.length - 1), ...keyboard.keys.slice(0, keyboard.keys.length - 1)],
            selectedRoot: plusSelectedRootValue(keyboard.selectedRoot)
          }
        })
      }
      break
    case 'ADD_KEYBOARD':
      return [...state, keyboardObject]
    case 'DELETE_KEYBOARD':
      return state.slice(0, state.length - 1)
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

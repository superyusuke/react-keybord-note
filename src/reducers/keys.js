import { colorClass } from '../constant/colorClass'

const keyObject = {
  text: '',
  colorClass: colorClass.NORMAL,
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
      return state.map((key, index) => {
        return index === action.index ? Object.assign({}, key, {
          colorClass: key.colorClass === colorClass.PUSHED
            ? colorClass.NORMAL
            : colorClass.PUSHED,
        }) : key
      })
    default:
      return state
  }
}

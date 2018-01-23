import { colorType } from '../constant/colorType'

export const colorSwitch = (state = colorType.PUSHED, action) => {
  switch (action.type) {
    case 'COLOR_SWITCH':
      return action.color
    default:
      return state
  }
}

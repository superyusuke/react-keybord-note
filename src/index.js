import React from 'react'
import ReactDOM from 'react-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './App'
import registerServiceWorker from './registerServiceWorker'

const keyArray = [
  'a',
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

const keys = (state = keyArray, action) => {
  switch (action.type) {
    case 'CHANGE':
      state[action.index] = 'c'
      console.log(state)
      return state
    default:
      return state
  }
}

const store = createStore(keys)

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'),
)

registerServiceWorker()

import React from 'react'
import ReactDOM from 'react-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { keyNote } from './reducers'

import { App } from './App'
import registerServiceWorker from './registerServiceWorker'

const store = createStore(keyNote)

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'),
)

registerServiceWorker()

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'rebass'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'
// import {createStore, applyMiddleware, compose} from 'redux'
// import thunk from 'redux-thunk'
// import rootReducer from './reducers'


// const store = createStore(
//   rootReducer,
//   compose(
//     applyMiddleware(thunk),
//     window.devToolsExtension ? window.devToolsExtension() : f => f
//   )
// )

ReactDOM.render(
    <Provider
      theme={{
        font: '"Comfortaa", sans-serif'
      }}
      style={{lineHeight: 1.35}}
    >
      <App />
    </Provider>,
    document.getElementById('root')); 
    registerServiceWorker();



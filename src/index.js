import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './core/App'

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)

// Disabling service worker for now until needed
// import registerServiceWorker from './registerServiceWorker'
// registerServiceWorker()

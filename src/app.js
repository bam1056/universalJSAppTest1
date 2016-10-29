import React from 'react'
import ReactDOM from 'react-dom'
import App from './pages/App'
import Example from './pages/Example'
import { Router, Route, browserHistory } from 'react-router'


const router = (
  <Router history={browserHistory}>
    <Route path='/' component={App} />
    <Route path='/example' component={Example} />
  </Router>
)
ReactDOM.render(router, document.getElementById('root'));

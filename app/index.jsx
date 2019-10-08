import React from 'react'
import ReactDOM from 'react-dom'
import App from './Components/App.jsx'
import './index.scss'
import { Provider }  from 'react-redux'
import store from './redux/store.js'

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>, document.getElementById('app')
);
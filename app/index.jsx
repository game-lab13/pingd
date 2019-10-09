import React from 'react'
import ReactDOM from 'react-dom'
import App from './Components/App.jsx'
import './index.scss'
import { Provider }  from 'react-redux'
import store from './redux/store.js'
import { BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
    <Provider store = {store}>
        <Router>
            <App />
        </Router>
    </Provider>, document.getElementById('app')
);
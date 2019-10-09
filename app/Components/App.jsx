import React, { Component } from 'react'
import Login from './Login.jsx'
import { BrowserRouter as Router} from 'react-router-dom'


class App extends Component {
    render() {

        return ( 
            <Router>
                <Login />
            </Router>
         );
    }
}
 
export default App;

 

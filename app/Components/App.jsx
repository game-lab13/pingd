import React, { Component } from 'react'
import Login from './Login.jsx'
import Text from './Ranking.jsx'
import { BrowserRouter as Router} from 'react-router-dom'


class App extends Component {
    render() {
        
        // const 

        return ( 
            // <Router>
                // <Link to="/">Log In</Link>
                // {/* <Link to="/text">Text</Link> */}
                // <Route exact path = '/' component = {Login} />
            //     {/* <Route exact path = '/text' component = {Text} /> */}
            // {/* </Router> */}
            <Router>
                <Login />
            </Router>
         );
    }
}
 
export default App;

 

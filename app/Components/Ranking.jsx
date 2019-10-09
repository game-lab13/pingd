import React, { Component } from 'react'
import Login from './Login.jsx'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Action from './Action.jsx'
import Main from './Main.jsx'


class Ranking extends Component {
    render() { 
        return ( 
            <Router>
                <div>
                <ul>
                <li>
                    <Link to='/main'>Main</Link>
                </li>
                <li>
                    <Link to="/action">Actions</Link>
                </li>
                </ul>
                <hr/>
                
                <Route exact path="/main" component={Main} />
                <Route path="/action" component={Action} />
                </div>
            </Router>
         );
    }
}
 
export default Ranking;
import React, { Component } from 'react'
import Login from './Login.jsx'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Action from './Action.jsx'
import Main from './Main.jsx'


class Ranking extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <div id='nav-bar'>
                        <button id='homeBtn'><Link to='/main'>Leaderboard</Link></button>
                        <button id='actionBtn'><Link to="/action">Actions</Link></button>
                   </div>
                    {/* <hr /> */}

                    <Route
                        exact path='/main'
                        render={() => <Main {...this.props} />}
                    />
                    {/* <Route exact path="/main" component={Main} /> */}
                    <Route path="/action" component={Action} />
            </Router>
        );
    }
}

export default Ranking;
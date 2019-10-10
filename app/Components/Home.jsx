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
                <div>
                    <ul>
                        <li>
                            <Link to='/main'>Leaderboard</Link>
                        </li>
                        <li>
                            <Link to="/action">Actions</Link>
                        </li>
                    </ul>
                    <hr />

                    <Route
                        exact path='/main'
                        render={() => <Main {...this.props} />}
                    />
                    {/* <Route exact path="/main" component={Main} /> */}
                    <Route path="/action" component={Action} />
                </div>
            </Router>
        );
    }
}

export default Ranking;
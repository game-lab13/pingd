import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, IndexRoute } from 'react-router-dom'
import Ranking from './Ranking.jsx'
import Main from './Main.jsx'
import * as actions from '../actions/actions.js'

const mapStateToProps = store => ({
    logInStatus: store.info.currentUserLoggedIn
})

const mapDispatchToProps = dispatch => ({
    logInToApp: (credentials) => actions.logInToMain(credentials),
    testLogIn: (data) => dispatch(actions.testLogIn(data)),
})

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:''
        }
    }

    setUserName(value) {
        this.setState({username: value})
        console.log(this.state);
    }
    
    setPassword(value) {
        this.setState({password: value})
        console.log(this.state);
    }

    render() { 
        if (this.props.logInStatus === true) {
            return (
                <Router>
                    <div>
                        <Ranking />
                    </div>
                </Router>
            )
        }
        // else if (this.props.logInStatus === false) {
        //     return (
        //         <SignUp />
        //     )
        // }
        else {
            return (
                    <div className='loginForm'>
                        <h2>PING'D</h2>
                        <input placeholder='Username' onChange={(e) => this.setUserName(e.target.value) }></input>
                        <input placeholder='Password' onChange={(e) => this.setPassword(e.target.value)}></input>
                        <button onClick={() => this.props.testLogIn(this.state)}>Log In</button>
                        <button>Sign Up</button>
                    </div>
             );
        }
    }
}
 
export default connect (mapStateToProps, mapDispatchToProps)(Login);
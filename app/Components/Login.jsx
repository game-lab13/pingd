import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, IndexRoute } from 'react-router-dom'
import Home from './Home.jsx'
import * as actions from '../actions/actions.js'

const mapStateToProps = store => ({
    loginID: store.info.loginID,
    currentRanking: store.info.currentRanking
})

const mapDispatchToProps = dispatch => ({
    logInToApp: (credentials) => dispatch(actions.logInToMain(credentials)),
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
        if (this.props.loginID) {
            return (
                <Router>
                    <div>
                        <Home currentRanking={this.props.currentRanking}/>
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
                        <button onClick={() => this.props.logInToApp(this.state)}>Log In</button>
                        <button>Sign Up</button>
                    </div>
             );
        }
    }
}
 
export default connect (mapStateToProps, mapDispatchToProps)(Login);
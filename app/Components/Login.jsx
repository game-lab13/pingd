import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, IndexRoute } from 'react-router-dom'
import Home from './Home.jsx'
import SignUp from './SignUp.jsx'
import * as actions from '../actions/actions.js'

const mapStateToProps = store => ({
    loginID: store.info.loginID,
    signUp: store.info.signUp,
    currentRanking: store.info.currentRanking
})

const mapDispatchToProps = dispatch => ({
    logInToApp: (credentials) => dispatch(actions.logInToMain(credentials)),
    toggleSignUp: () => dispatch(actions.activateSignUp()),
})

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:''
        }
    }

    setUsername(value) {
        this.setState({username: value})
    }
    
    setPassword(value) {
        this.setState({password: value})
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
        else if (this.props.signUp === true) {
            return (
                <SignUp />
            )
        }
        else {
            return (
                    <div className='loginForm'>
                        <h2 className='title'>PiNG'D</h2>
                        <input className='userInput' placeholder='Username' type='text' onChange={(e) => this.setUsername(e.target.value) }></input>
                        <input className='userInput' placeholder='Password' type='password' onChange={(e) => this.setPassword(e.target.value)}></input>
                        <button className='loginBtn' onClick={() => this.props.logInToApp(this.state)}>Log In</button>
                        <button className='signupBtn' onClick={() => this.props.toggleSignUp()}>Sign Up</button>
                    </div>
             );
        }
    }
}
 
export default connect (mapStateToProps, mapDispatchToProps)(Login);
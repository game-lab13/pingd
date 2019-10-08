import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Text from './Text.jsx'

class Login extends Component {
    render() { 
        return (
                <div className='loginForm'>
                    <input placeholder='Username'></input>
                    <input placeholder='Password'></input>
                    <button>Log In</button>
                    <button>Sign Up</button>
                </div>
         );
    }
}
 
export default Login;
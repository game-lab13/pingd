import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js'


const mapStateToProps = store => ({
  loginID: store.info.loginID,
  signUp: store.info.signUp,
  currentRanking: store.info.currentRanking
})

const mapDispatchToProps = dispatch => ({
  signUpToApp: (credentials) => dispatch(actions.signUp(credentials)),
})

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      password: '',
      phone: '',
      username: '',
    }
  }

    setFname(value) {
      this.setState({first_name: value})
    }

    setLname (value) {
      this.setState({last_name: value})
    }

    setPassword (value) {
      this.setState({password: value})
    }

    setPhone(value) {
      this.setState({phone: value})
    }
    
    setUsername(value) {
        this.setState({username: value})
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
    else {
      return ( 
        <div className='loginForm'>
            <h2>Sign Up</h2>
            <input placeholder='First Name' onChange={(e) => this.setFname(e.target.value)}></input>
            <input placeholder='Last Name' onChange={(e) => this.setLname(e.target.value)}></input>
            <input placeholder='Username' onChange={(e) => this.setUsername(e.target.value)}></input>
            <input placeholder='Password' type='password' onChange={(e) => this.setPassword(e.target.value)}></input>
            <input placeholder='Phone' onChange={(e) => this.setPhone(e.target.value)}></input>
            <button onClick={() => this.props.signUpToApp(this.state)}>Submit</button>
        </div>
       );
    }
  }
}
 
export default connect (mapStateToProps, mapDispatchToProps)(SignUp);
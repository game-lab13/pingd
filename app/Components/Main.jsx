import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import RankRow from './RankRow.jsx'
import * as actions from '../actions/actions.js'

const mapStateToProps = store => ({
  loginID: store.info.loginID,
  signUp: store.info.signUp,
  invitesSent: store.info.invitesSent,
  currentRanking: store.info.currentRanking
})

const mapDispatchToProps = dispatch => ({
  logInToApp: (credentials) => dispatch(actions.logInToMain(credentials)),
  toggleSignUp: () => dispatch(actions.activateSignUp()),
})

class Main extends Component {
  constructor(props) {
    super(props);

}

  render() { 
      let currentUserRanking;
      const rankingArray = this.props.currentRanking.map((user, index) => {
        if (user.id === this.props.loginID) currentUserRanking = index + 1;
        return <RankRow rank={index} key={`rankrow${index}`} currentUser={this.props.loginID} ranking={user} />
      })

      return (
        <div className='rankingsContainer'>
          <h3>OVERALL RANKINGS</h3>
          <p>{`Your ranking is ${currentUserRanking}`}</p>
          <div id ='rankingBody'>
          <div className='rankingsRow header'>
            <div>Rank</div>
              <div className='userNameDiv'>Username</div>
              <div>Score</div>
              <div>Wins</div>
              <div>Losses</div>
          </div>
          <div>{rankingArray}</div>
          </div>
        </div>
      )
  }
}

// export default Main;
export default connect (mapStateToProps, mapDispatchToProps)(Main);
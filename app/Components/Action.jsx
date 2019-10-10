import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import InviteSent from './InviteSent.js'
import InviteReceived from './InviteReceived.js'
import RecordScore from './RecordScore.js'
import ScoreConfirm from './ScoreConfirm.js'

import { connect } from 'react-redux'
import * as actions from '../actions/actions.js'

const mapStateToProps = store => ({
    loginID: store.info.loginID,
    loginUsername: store.info.loginUsername,
    signUp: store.info.signUp,
    currentRanking: store.info.currentRanking,
    invitesReceived: store.info.invitesReceived,
    invitesSent: store.info.invitesSent,
    scoresToConfirm: store.info.scoresToConfirm,
    scoresToRecord: store.info.scoresToRecord,
})

const mapDispatchToProps = dispatch => ({
    removeInvite: (data) => dispatch(actions.removeInvite(data)),
    recordScore: (data) => dispatch(actions.recordScore(data)),
    scoreConfirmation: (data) => dispatch(actions.scoreConfirmation(data))
})

class Action extends Component {
  constructor(props) {
    super(props);
  }
  render() { 

    const invSentArray = this.props.invitesSent.map((data, index) => {
      return <InviteSent key={`invitesent${index}`} invite={data} />
    })
    
    const invReceivedArray = this.props.invitesReceived.map((data, index) => {
      return <InviteReceived key={`invitereceived${index}`} invite={data} removeInvite={this.props.removeInvite}/>
    })
    
    const recordScoreArray = this.props.scoresToRecord.map((data, index) => {
      return <RecordScore key={`record${index}`} guestData={data} host={{username: this.props.loginUsername, id: this.props.loginID}} recordScore={this.props.recordScore} />
    })
    
    const scoreConfirmArray = this.props.scoresToConfirm.map((data, index) => {
      return <ScoreConfirm scoreConfirmation={this.props.scoreConfirmation} key={`confirm${index}`} scoreData={data} loginUsername={this.props.loginUsername} />
    })

      return (
        <div>
          <div>
            Invite Sent
            <hr/>
            {invSentArray}
          </div>
          <div>
            Invite Received
            <hr/>
            {invReceivedArray}
          </div>
          <div>
            Record Score
            <hr/>
            {recordScoreArray}
          </div>
          <div>
            Score Confirmation
            <hr/>
            {scoreConfirmArray}
          </div>
        </div>
      )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Action);
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
  logInToApp: (credentials) => dispatch(actions.logInToMain(credentials)),
  toggleSignUp: () => dispatch(actions.activateSignUp()),
  removeInvite: (data) => dispatch(actions.removeInvite(data)),
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
      return <InviteReceived key={`invitereceived${index}`} invite={data} removeInvite={this.props.removeInvite} />
    })

    const recordScoreArray = this.props.scoresToRecord.map((data, index) => {
      return <RecordScore key={`record${index}`} guestData={data} host={this.props.loginUsername} />
    })

    const scoreConfirmArray = this.props.scoresToConfirm.map((data, index) => {
      return <ScoreConfirm key={`confirm${index}`} scoreData={data} />
    })

    return (
      <div>
        <div className="left-actions">
          <div>
            <h2 className="action-title">Invites Sent</h2>
            {invSentArray}
          </div>
          <div>
            <h2 className="action-title">Invites Received</h2>
            {invReceivedArray}
          </div>
        </div>
        <div className="right-actions">
          <div>
            <h2 className="action-title">Record Scores</h2>
            {recordScoreArray}
          </div>
          <div>
            <h2 className="action-title">Confirm Scores</h2>
            {scoreConfirmArray}
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Action);
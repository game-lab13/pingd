import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import InviteSent from './InviteSent.js'
import InviteReceived from './InviteReceived.js'
import RecordScore from './RecordScore.js'
import ScoreConfirm from './ScoreConfirm.js'

//! test data - ERASE LATER
const testData = [{user: 'Paul'}, {user: 'Duane'}]
const testDataScore = [{host: 'Paul', guest: 'Duane'}, {host: 'XaRheea', guest: 'Natalie'}]
const testDataResult = [{winner: 'Duane'}, {winner: 'XaRheea'}]

const mappedTest = testData.map((data, index) => {
  return <InviteSent key={`invitesent${index}`} player={data} />
})

const mappedTest2 = testData.map((data, index) => {
  return <InviteReceived key={`invitereceived${index}`} player={data} />
})

const mappedTest3 = testDataScore.map((data, index) => {
  return <RecordScore key={`record${index}`} player={data} />
})

const mappedTest4 = testDataResult.map((data, index) => {
  return <ScoreConfirm key={`confirm${index}`} player={data} />
})

class Action extends Component {
  render() { 
      return (
        <div>
          <div>
            Invite Sent
            <hr/>
            {mappedTest}
          </div>
          <div>
            Invite Received
            <hr/>
            {mappedTest2}
          </div>
          <div>
            Record Score
            <hr/>
            {mappedTest3}
          </div>
          <div>
            Score Confirmation
            <hr/>
            {mappedTest4}
          </div>
        </div>
      )
  }
}

export default Action;
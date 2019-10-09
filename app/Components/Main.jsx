import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import RankRow from './RankRow.jsx'

class Main extends Component {
  constructor(props) {
    super(props);

}
  render() { 
      const rankingArray = this.props.currentRanking.map((user, index) => {
        return <RankRow key={`rankrow${index}`} ranking={user} />
      })

      return (
        <div>
          <h3>Ping'd Ranking</h3>
          {rankingArray}
        </div>
      )
  }
}

export default Main;
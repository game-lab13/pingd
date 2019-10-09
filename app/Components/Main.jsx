import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import RankRow from './RankRow.jsx'


const testData = [{
  userName: 'prheee',
  ranking: 1,
  W: 5,
  L: 0
},
{
  userName: 'prheee2',
  ranking: 2,
  W: 5,
  L: 1
},
{
  userName: 'prheee3',
  ranking: 3,
  W: 5,
  L: 2
}];


class Main extends Component {
  render() { 

      // testData.map((user) => {
      //   return <RankRow props={user} />
      // })

      return (
        <div>
          <h3>Ping'd Ranking</h3>
          {testData.map((user, index) => {
          return <RankRow key={`rankrow${index}`} name={user} />
          })}
        </div>
      )
  }
}

export default Main;
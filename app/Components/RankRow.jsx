import React from 'react'

// formatting data received from the server

const RankRow = (props) => {
  return (
    <div>
      {props.ranking.username}
      {props.ranking.points}
    </div>
  )
}

export default RankRow;
import React from 'react'

// formatting data received from the server

const RankRow = (props) => {
  return (
    <div className='rankingsRow'>
      <div>{props.ranking.username}</div>
      {/* <button>match</button> */}
      <div>{props.ranking.points}</div>
      <div>{props.ranking.wins}</div>
      <div>{props.ranking.losses}</div>
      {/* <div>{props.ranking.points}</div> */}
    </div>
  )
}

export default RankRow;
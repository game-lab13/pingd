import React from 'react'

// formatting data received from the server

const RankRow = (props) => {
  return (
    <div>
      {props.name.username}
      {props.name.points}
    </div>
  )
}

export default RankRow;
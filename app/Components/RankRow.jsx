import React from 'react'
import * as actions from '../actions/actions.js'
// import { connect } from 'react-redux'

// const mapStateToProps = store => ({
//   loginID: store.info.loginID,
//   signUp: store.info.signUp,
//   currentRanking: store.info.currentRanking
// })

// formatting data received from the server

const RankRow = (props) => {
  console.log(props.ranking.username, 'is the username')

  // console.log(this.loginID, ' is props login id')
  if (props.username === props.ranking.id){
    return (
      <div className='rankingsRow'>
      <div>{props.rank+1}</div>
      <div>
        {props.ranking.username}
        <button className='matchBtn'>Match!</button>
      </div>
      <div>{props.ranking.points}</div>
      <div>{props.ranking.wins}</div>
      <div>{props.ranking.losses}</div>
      {/* <div>{props.ranking.points}</div> */}
    </div>
    )
  } else {
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
}

export default RankRow;
// export default connect (mapStateToProps)(RankRow);
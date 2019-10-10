import React from 'react'
import * as actions from '../actions/actions.js'
import { connect } from 'react-redux'

const mapStateToProps = store => ({
  loginID: store.info.loginID,
  signUp: store.info.signUp,
  loginUsername: store.info.loginUsername,
  currentRanking: store.info.currentRanking,
  invitesSent: store.info.invitesSent,
})


const mapDispatchToProps = dispatch => ({
  createMatch: (matchData) => dispatch(actions.createMatch(matchData)),
})

// formatting data received from the server


function clickMe(data){
  console.log(data)
}

const RankRow = (props) => {
  // console.log(props.loginUsername, 'is the logged in user')

  // console.log(this.loginID, ' is props login id')
  // console.log(props.userInfo, ' is the logged in user!!!!')
  // if (this.props.loginUsername === props.ranking.id){
  //   return (
  //     <div className='rankingsRow'>
  //     <div>{props.rank+1}</div>
  //     <div>
  //       {props.ranking.username}
  //       <button className='inviteBtn' onClick={() => clickMe(props.ranking.username)} className='matchBtn'>Match!</button>
  //     </div>
  //     <div>{props.ranking.points}</div>
  //     <div>{props.ranking.wins}</div>
  //     <div>{props.ranking.losses}</div>
  //     {/* <div>{props.ranking.points}</div> */}
  //   </div>
  //   )
  // } else {
    return (
      <div className='rankingsRow'>
        <div>{props.rank+1}</div>
        <div className='userNameDiv'>{props.ranking.username}<button className='inviteBtn' onClick={() => props.createMatch({host_id: props.loginID, guest_id: props.ranking.id})} className='matchBtn'>Invite!</button>
</div>
        <div>{props.ranking.points}</div>
        <div>{props.ranking.wins}</div>
        <div>{props.ranking.losses}</div>
        {/* <div>{props.ranking.points}</div> */}
      </div>
    )
  }


// export default RankRow;
export default connect (mapStateToProps, mapDispatchToProps)(RankRow);
import React from 'react';

const ScoreConfirm = props => {

  let winner;
  if (props.scoreData.user_id !== props.scoreData.selected_winner_id) winner = props.loginUsername;
  else winner = props.scoreData.username;

  return (
    <div style={{border: 'solid orange 3px', width: '150px', marginBottom: '5px'}} className="ScoreConfirm">
      <div >{`did ${winner} win?`}</div>
      <button onClick={() => props.scoreConfirmation({match_id: props.scoreData.match_id, user_response: 'confirm'})}>Yes</button>
      <button onClick={() => props.scoreConfirmation({match_id: props.scoreData.match_id, user_response: 'declined'})}>No!</button>
    </div>
  );
};

export default ScoreConfirm;
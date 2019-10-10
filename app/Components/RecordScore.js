import React from 'react';

const RecordScore = props => {

  return (
    <div className="RecordScore action-box">
      <div>Who won?</div>
      <button onClick={() => props.recordScore({ match_id: props.guestData.match_id, selected_winner_id: props.guestData.user_id })} >{props.guestData.username}</button>
      <button onClick={() => props.recordScore({ match_id: props.guestData.match_id, selected_winner_id: props.host.id })} >{props.host.username}</button>
    </div>
  );
};

export default RecordScore;
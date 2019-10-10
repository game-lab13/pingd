import React from 'react';

const RecordScore = props => {

  return (
    <div style={{border: 'solid pink 5px', width: '150px' ,marginBottom: '5px'}} className="RecordScore">
      <div >Who won?</div>
      <button onClick={() => props.recordScore({ match_id: props.guestData.match_id, selected_winner_id: props.guestData.user_id })} >{props.guestData.username}</button>
      <button onClick={() => props.recordScore({ match_id: props.guestData.match_id, selected_winner_id: props.host.id })} >{props.host.username}</button>
    </div>
  );
};

export default RecordScore;
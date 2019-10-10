import React from 'react';

const InviteReceived = props => {

  return (
    <div className="action-box">
      {/* // style={{border: 'solid red 1px', width: '150px' ,marginBottom: '5px'}} className="InviteSent"> */}
      <div>Invite received from</div>
      <div>{props.invite.username}</div>
      <button onClick={() => props.removeInvite({ match_id: props.invite.match_id, user_response: 'accept' })}>Accept</button>
      <button onClick={() => props.removeInvite({ match_id: props.invite.match_id, user_response: 'decline' })}>Decline</button>
    </div>
  );
};

export default InviteReceived;
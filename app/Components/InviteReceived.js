import React from 'react';

const InviteReceived = props => {

  return (
    <div className="action-box">
      <div>Invite received from:</div>
      <div className="invite-action-object">{props.invite.username}</div>
      <button onClick={() => props.removeInvite({ match_id: props.invite.match_id, user_response: 'accept' })}>Accept</button>
      <button onClick={() => props.removeInvite({ match_id: props.invite.match_id, user_response: 'decline' })}>Decline</button>
    </div>
  );
};

export default InviteReceived;
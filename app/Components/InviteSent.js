import React from 'react';

const InviteSent = props => {

  return (
    <div className="action-box">
      <div>Invite sent to:</div>
      <div className="invite-action-object">{props.invite.username}</div>
    </div>
  );
};

export default InviteSent;
import React from 'react';

const InviteSent = props => {

  return (
    <div className="action-box">
      {/* style={{ border: 'solid blue 1px', width: '150px', marginBottom: '5px' }} className="InviteSent"> */}
      <div>Invite sent to:</div>
      <div className="invite-sent">{props.invite.username}</div>
    </div>
  );
};

export default InviteSent;
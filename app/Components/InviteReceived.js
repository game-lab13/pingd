import React from 'react';

const InviteReceived = props => {

  return (
    <div style={{border: 'solid red 1px', width: '150px' ,marginBottom: '5px'}} className="InviteSent">
      <div >Invite received to</div>
      <div>{props.invite.username}</div>
      <button>Accept</button>
      <button>Decline</button>
    </div>
  );
};

export default InviteReceived;
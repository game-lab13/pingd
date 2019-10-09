import React from 'react';

const InviteSent = props => {

  return (
    <div style={{border: 'solid blue 1px', width: '150px' ,marginBottom: '5px'}} className="InviteSent">
      <div >Invite sent to</div>
      <div>{props.player.user}</div>
    </div>
  );
};

export default InviteSent;
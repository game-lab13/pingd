import React from 'react';

const RecordScore = props => {

  return (
    <div className="action-box RecordScore">
      <div>Who won?</div>
      <button>{props.guestData.username}</button>
      <button>{props.host}</button>
    </div>
  );
};

export default RecordScore;
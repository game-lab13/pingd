import React from 'react';

const ScoreConfirm = props => {

  return (
    <div className="action-box">
      <div>{`Did `}<span className="action-object">{props.scoreData.username}</span>{` win?`}</div>
      <button>Yes</button>
      <button>No!</button>
    </div>
  );
};

export default ScoreConfirm;
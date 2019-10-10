import React from 'react';

const ScoreConfirm = props => {

  return (
    <div className="action-box">
      {/* // style={{border: 'solid orange 3px', width: '150px', marginBottom: '5px'}} className="ScoreConfirm"> */}
      <div>{`Did ${props.scoreData.username} win?`}</div>
      <button>Yes</button>
      <button>No!</button>
    </div>
  );
};

export default ScoreConfirm;
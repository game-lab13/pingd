import React from 'react';

const ScoreConfirm = props => {

  return (
    <div style={{border: 'solid orange 3px', width: '150px', marginBottom: '5px'}} className="ScoreConfirm">
      <div >{`did ${props.scoreData.username} win?`}</div>
      <button>Yes</button>
      <button>No!</button>
    </div>
  );
};

export default ScoreConfirm;
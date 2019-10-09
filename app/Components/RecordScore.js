import React from 'react';

const RecordScore = props => {

  return (
    <div style={{border: 'solid pink 5px', width: '150px' ,marginBottom: '5px'}} className="RecordScore">
      <div >Who won?</div>
      <button>{props.guestData.username}</button>
      <button>{props.host}</button>
    </div>
  );
};

export default RecordScore;
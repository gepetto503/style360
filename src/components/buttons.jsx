import React from 'react';

const Buttons = (props) => {
  return (
    <div className="buttons">
      {props.labels.map((label, index) => (
        <span key={index} className="button">{label}</span>
      ))}
    </div>
  );
}

export default Buttons;

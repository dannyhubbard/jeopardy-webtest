import React from 'react';

const Clue = ({ amount, makeActive, answered, answer, question }) => {
  if (answered) {
    return <div className="Clue" />;
  } else {
    return (
      <div
        className="Clue Clue-unanswered"
        onClick={makeActive.bind(this, { amount, answer, question })}
      >
        <div className="Clue-amount">$&nbsp; {amount}</div>
      </div>
    );
  }
};

export default Clue;

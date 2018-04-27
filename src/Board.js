import React from 'react';
import Header from './Header';
import Clue from './Clue';

const Board = ({ questions, activeClue, answeredQuestions, actions }) => {
  return (
    <div className="Board">
      {questions.map((row, rowIdx) => (
        <div key={rowIdx} className="row">
          {row.map((clue, idx) => {
            if (rowIdx === 0) {
              return <Header key={idx} title={clue} />;
            } else {
              return (
                <Clue
                  key={idx}
                  question={clue.question}
                  answer={clue.answer}
                  amount={rowIdx * 200}
                  answered={answeredQuestions.includes(clue.question)}
                  makeActive={actions.makeActive}
                />
              );
            }
          })}
        </div>
      ))}
      {activeClue && (
        <div className="Clue-active">
          <div className="Clue-cancel" onClick={actions.cancelActive}>
            ╳
          </div>
          <div className="group">
            <div className="Clue-active-question">{activeClue.question}</div>
            <div className="Clue-active-answer">
              <input type="text" onChange={actions.handleChange} />
              <br />
              <button onClick={actions.submitAnswer}>What Is...</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Board;

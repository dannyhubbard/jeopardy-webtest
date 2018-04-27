import { connect } from 'react-redux';
import Board from './Board';
import {
  CANCEL_ACTIVE,
  ANSWER_CHANGED,
  ANSWER_SUBMITTED,
  MAKE_ACTIVE_CLUE
} from './actions';

const mapStateToProps = ({ activeClue, answeredQuestions }) => {
  return {
    activeClue,
    answeredQuestions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      handleChange: event =>
        dispatch({ type: ANSWER_CHANGED, text: event.target.value }),
      submitAnswer: () => {
        dispatch({ type: ANSWER_SUBMITTED });
      },
      makeActive: clue => dispatch({ type: MAKE_ACTIVE_CLUE, clue: clue }),
      cancelActive: () => dispatch({ type: CANCEL_ACTIVE })
    }
  };
};

const GameBoard = connect(mapStateToProps, mapDispatchToProps)(Board);

export default GameBoard;


import {
  QUESTIONS_RECEIVED,
  MAKE_ACTIVE_CLUE,
  CANCEL_ACTIVE,
  ANSWER_CHANGED,
  ANSWER_SUBMITTED
} from './actions';

const appReducer = (state, action) => {
  switch (action.type) {
    case MAKE_ACTIVE_CLUE:
      return { ...state, activeClue: action.clue };

    case CANCEL_ACTIVE:
      return { ...state, activeClue: null };

    case ANSWER_SUBMITTED:
      let newState = { ...state };
      let newAnsweredQs = [
        state.activeClue.question,
        ...state.answeredQuestions
      ];

      if (answerMatches(state)) {
        newState.score += state.activeClue.amount;
        newState.message = 'Correct!';
      } else {
        newState.score -= state.activeClue.amount;
        newState.message = `You said, '${
          state.answer
        }', but the answer we were looking for was '${
          state.activeClue.answer
        }'.`;
      }

      if (newAnsweredQs.length >= totalQuestions(state)) {
        newState.gameover = true;
      }

      return {
        ...newState,
        activeClue: null,
        answeredQuestions: newAnsweredQs
      };

    case ANSWER_CHANGED:
      return { ...state, answer: action.text };

    case QUESTIONS_RECEIVED:
      return { ...state, questions: action.questions };

    default:
      return state;
  }
};

const answerMatches = ({ activeClue, answer }) => {
  return activeClue.answer.toLowerCase() === answer.toLowerCase();
};

const totalQuestions = ({ questions }) => {
  return (
    questions
      .slice(questions.length * -1 + 1)
      .reduce((acc, el) => acc + el.length, 0) || 0
  );
};

export default appReducer;

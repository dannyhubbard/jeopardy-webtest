import request from 'superagent';
export const QUESTIONS_RECEIVED = 'questions_received';
export const QUESTIONS_REQUESTED = 'questions_requested';
export const ANSWER_SUBMITTED = 'answer_submitted';
export const ANSWER_CHANGED = 'answer_changed';
export const MAKE_ACTIVE_CLUE = 'make_active_clue';
export const CANCEL_ACTIVE = 'cancel_active';
export const ADD_TO_SCORE = 'add_to_score';
export const END_GAME = 'end_game';

export const fetchQuestions = dispatch => {
  return () => {
    dispatch({ type: QUESTIONS_REQUESTED });

    let questions = {};
    const requests = [306, 21, 105, 442, 49, 69].map(categoryID => {
      return request
        .get('http://jservice.io/api/clues')
        .query({ category: categoryID })
        .then(res => {
          questions[res.body[0].category.title] = res.body.slice(0, 5);
        })
        .catch(console.error);
    });

    Promise.all(requests).then(results => {
      dispatch({
        questions: [Object.keys(questions)].concat(
          Object.keys(questions)
            .map(q => questions[q])
            .reduce(
              ($, row) => row.map((_, i) => [...($[i] || []), row[i]]),
              []
            )
        ),
        type: QUESTIONS_RECEIVED
      });
    });
  };
};


import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import appReducer from './app_reducer.js';

const initialState = {
  answeredQuestions: [],
  activeClue: null,
  questions: [],
  gameover: false,
  answer: '',
  score: 0
};

const enhancers = [];
const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const store = createStore(appReducer, initialState, composedEnhancers);

export default store;

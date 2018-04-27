import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import App from '../App';

const _catch = jest.fn();
const _then = jest.fn(() => ({ catch: _catch }));
const query = jest.fn(() => ({ then: _then }));
const get = jest.fn(() => ({ query: query }));
const r = { get };

const mockStore = configureStore([thunk]);

const app = (initialState = {}) => {
  let store = mockStore(initialState);
  return mount(<App store={store} />);
};

it('renders without crashing', () => {
  expect(app()).toBeDefined;
});

it('renders game over screen only when the game is over', () => {
  expect(app({ gameover: true }).html()).toContain('Game Over');
  expect(app({ gameover: false }).html()).not.toContain('Game Over');
});

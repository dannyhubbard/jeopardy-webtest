import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Board from '../Board';

it('accepts an array of questions as props', () => {
  const b = shallow(
    <Board
      answeredQuestions={[]}
      actions={{ makeActive: jest.fn() }}
      questions={[['food', 'cats'], ['tacos', 'meow']]}
    />
  );
  expect(b.html()).toContain('food');
  expect(b.html()).toContain('cats');
  expect(b.html()).toContain('$  200');
});

describe('With an active clue', () => {
  const boardWithActiveClue = () => {
    const b = mount(
      <Board
        answeredQuestions={[]}
        actions={{ makeActive: jest.fn() }}
        activeClue={{
          question: 'Best tacos in town',
          answer: 'Tacodeli',
          amount: 200
        }}
        questions={[
          ['food'],
          [{ question: 'Best tacos in town', answer: 'Tacodeli' }]
        ]}
      />
    );
    return b;
  };

  it('clicking on a clue marks it as active', () => {
    expect(boardWithActiveClue().props().activeClue).toEqual({
      amount: 200,
      question: 'Best tacos in town',
      answer: 'Tacodeli'
    });
  });

  it('active clues present an input field and submit button', () => {
    const board = boardWithActiveClue();
    expect(board.find('.Clue-active').length).toEqual(1);
    expect(board.find('.Clue-active input').length).toEqual(1);
    expect(board.find('.Clue-active button').length).toEqual(1);
  });
});

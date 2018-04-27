import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuestions } from './actions';
import GameBoard from './GameBoard';
import Score from './Score';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchQuestions();
  }
  render() {
    if (this.props.gameover) {
      return (
        <div className="App">
          <div className="Gameover">
            <h2>Game Over</h2>
            <p>Final Score: {this.props.score}</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">JEOPARDY!</h1>
            <Score score={this.props.score} />
          </header>
          <main>
            <h4 className="Message">{this.props.message}</h4>
            {this.props.questions && (
              <GameBoard questions={this.props.questions} />
            )}
          </main>
        </div>
      );
    }
  }
}

const mapStateToProps = ({ score, gameover, message, questions }) => {
  return {
    score,
    gameover,
    message,
    questions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchQuestions: dispatch(fetchQuestions)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

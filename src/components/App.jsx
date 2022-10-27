import React, { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onGoodBtnClick = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  onNeutralBtnClick = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  onBadBtnClick = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <>
        <h2>Please leave feedback</h2>
        <button type="button" onClick={this.onGoodBtnClick} name="good">
          Good
        </button>
        <button type="button" onClick={this.onNeutralBtnClick} name="neutrals">
          Neutral
        </button>
        <button type="button" onClick={this.onBadBtnClick} name="bad">
          Bad
        </button>
        <h2>Statistics</h2>
        <p>Good:{this.state.good}</p>
        <p>Neutrals:{this.state.neutral}</p>
        <p>Bad:{this.state.bad}</p>
        <p>Total:{this.countTotalFeedback()}</p>
        <p>
          Positive feedback:
          {this.countTotalFeedback()
            ? this.countPositiveFeedbackPercentage()
            : 0}
          %
        </p>
      </>
    );
  }
}

export default App;

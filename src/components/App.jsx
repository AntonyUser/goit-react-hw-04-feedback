import React, { Component } from 'react';
import { Statistics } from '../components/Statistics/Statistics';
import { FeedbackOptions } from './Buttons/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onBtnClick = event => {
    this.setState(prevState => {
      return {
        [event.target.name]: prevState[event.target.name] + 1,
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
    const keys = Object.keys(this.state);
    return (
      <>
        <Section title="Please leave feedback">
          <h2>Please leave feedback</h2>
          <FeedbackOptions options={keys} onLeaveFeedback={this.onBtnClick} />
        </Section>

        <Section title="Statistics">
          <h2>Statistics</h2>
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}

export default App;

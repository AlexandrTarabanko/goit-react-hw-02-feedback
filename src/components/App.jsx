import PropTypes from 'prop-types';
import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 52,
    neutral: 32,
    bad: 23,
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;

    // let total = 0;
    // arr.forEach(el => {
    //   totalCount += el[1];
    // });

    // return totalCount;
  }

  countPositiveFeedbackPercentage() {
    // let positiveArr = arr[0];
    // let positiveVoices = positiveArr[1];

    const { good } = this.state;

    return Math.round((good / this.countTotalFeedback()) * 100);
  }

  // addVoice() {
  //   this.setState(prevState => {
  //     return {
  //       [option]: prevState[option] + 1,
  //     };
  //   });
  // }

  render() {
    const arrInfo = Object.keys(this.state).map(key => [key, this.state[key]]);
    const arrNames = Object.keys(this.state).map(key => key);
    const { good, neutral, bad } = this.state;

    return (
      <>
        <h2>Please leave feedback</h2>

        <ul>
          {arrNames.map(optionName => (
            <li key={optionName}>
              <button>{optionName}</button>
            </li>
          ))}
        </ul>

        {/* <FeedbackOptions options={} onLeaveFeedback={}/> */}
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </>
    );
  }
}

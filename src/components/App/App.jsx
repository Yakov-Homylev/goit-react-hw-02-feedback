import { Component } from "react";
import { Title, List, Button } from "./App.styled";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  OnButtonClick = (e) => {
    this.setState({
      [e.target.name]: this.state[e.target.name] + 1,
    });
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    return values.reduce((acc, value) => value + acc, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Number.parseInt((good * 100) / this.countTotalFeedback()) || 0;
  };

  render() {
    return (
      <div>
        <Title>Please leave Feedback</Title>
        {Object.keys(this.state).map((key) => (
          <Button
            name={key}
            type="button"
            key={key}
            onClick={this.OnButtonClick}>
            {key}
          </Button>
        ))}
        <h2>Statistics</h2>
        <List>
          {Object.keys(this.state).map((key) => (
            <li key={key}>
              <p>
                {key}:<span>{this.state[key]}</span>
              </p>
            </li>
          ))}
          <li>
            <p>
              Total: <span>{this.countTotalFeedback()}</span>
            </p>
          </li>
          <li>
            <p>
              Positive Feedback:
              <span>{this.countPositiveFeedbackPercentage()}%</span>
            </p>
          </li>
        </List>
      </div>
    );
  }
}

export default App;

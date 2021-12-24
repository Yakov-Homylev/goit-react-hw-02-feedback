import { Button, List } from "./FeedbackOptions.styled";

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <List>
      {options.map((option) => {
        return (
          <li key={option}>
            <Button type="button" onClick={() => onLeaveFeedback(option)}>
              {option}
            </Button>
          </li>
        );
      })}
    </List>
  );
}

export default FeedbackOptions;

import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

// const { Button } = require('./FeedbackOptions.styled');

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(option => {
        return (
          <Button
            type="button"
            key={option}
            onClick={onLeaveFeedback}
            name={option}
          >
            {option}
          </Button>
        );
      })}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};

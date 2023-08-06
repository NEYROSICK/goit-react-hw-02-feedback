// import PropTypes from 'prop-types'
import { Button } from 'ui/Button.styled';
import { Ul } from './feedbackOptions.styled';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <Ul>
      <li>
        <Button
          onClick={() => {
            onLeaveFeedback('good');
          }}
        >
          Good
        </Button>
      </li>
      <li>
        <Button
          onClick={() => {
            onLeaveFeedback('neutral');
          }}
        >
          Neutral
        </Button>
      </li>
      <li>
        <Button
          onClick={() => {
            onLeaveFeedback('bad');
          }}
        >
          Bad
        </Button>
      </li>
    </Ul>
  );
};

// FeedbackOptions.propTypes = {}

export default FeedbackOptions;

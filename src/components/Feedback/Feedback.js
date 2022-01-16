
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Section from '../Section';
import Notification from '../Notification';
import PropTypes from 'prop-types';

export default function Feedback ({ good, neutral, bad, total, positivePercentage, onClickFeedbackChange, stateValues }) {

  return (
    <div >
      <Section title="Please leave feedback" />
      <FeedbackOptions
        onClickFeedbackChange={onClickFeedbackChange}
        option={stateValues}
      />
      <Section title="Statistics" />
      {total === 0
        ?
        <Notification messege="There is no feedback" />
        :
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />}
      
         
    </div>
  )
  
}

PropTypes.Feedback = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  onClickFeedbackChange: PropTypes.func.isRequired,
};
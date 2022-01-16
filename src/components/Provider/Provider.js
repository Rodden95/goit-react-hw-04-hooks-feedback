import { useState } from "react";
import Feedback from '../Feedback';

const feedback = {
  GOOD: 'good',
  NEUTRAL: 'neutral',
  BAD: 'bad'
}
export default function Provider() {
  
  const [good, goodChange] = useState(0);
  const [neutral, neutralChange] = useState(0);
  const [bad, badChange] = useState(0);

  const procentOfPositiveFeedbacks = Math.round(good / (good + neutral + bad) * 100);
  const sum = good + neutral + bad;
  
  const onClickFeedbackChange = (name) => {
    if (name === 'good')
      goodChange(prevState => prevState + 1)
      
    else if (name === 'neutral')
      neutralChange(prevState => prevState + 1)
      
    else if (name === 'bad')
      badChange(prevState => prevState + 1)
   
  }
  return (
    <div className="container">
      <Feedback
        stateValues={{ good, neutral, bad }}
        good={good}
        neutral={neutral}
        bad={bad}
        total={sum}
        positivePercentage={procentOfPositiveFeedbacks} onClickFeedbackChange={onClickFeedbackChange}
      />
    </div>
  )
}
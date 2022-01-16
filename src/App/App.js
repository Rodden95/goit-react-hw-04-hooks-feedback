import { useContext } from 'react';
import './App.css';
import Provider from "../components/Provider/Provider";
import Feedback from "../components/Feedback"
const App = () => {
 
  const { good, neutral, bad, sum, procentOfPositiveFeedbacks, onClickFeedbackChange } = useContext(Provider);
  return (
    
      <Feedback
        stateValues={{ good, neutral, bad }}
        good={good}
        neutral={neutral}
        bad={bad}
        total={sum}
        positivePercentage={procentOfPositiveFeedbacks} onClickFeedbackChange={onClickFeedbackChange}
      />
    
  )

};
export default App;

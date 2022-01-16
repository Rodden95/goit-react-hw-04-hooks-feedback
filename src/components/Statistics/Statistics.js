import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';
function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    
    <ListGroup variant="flush" >
      <ListGroup.Item>Good:{good}</ListGroup.Item>
      <ListGroup.Item>Neutral:{neutral}</ListGroup.Item>
      <ListGroup.Item>Bad:{bad}</ListGroup.Item>
      <ListGroup.Item>Total:{total}</ListGroup.Item>
      <ListGroup.Item>Positive Feedback:{positivePercentage}%</ListGroup.Item>
    </ListGroup>
  )
}
PropTypes.Statistics = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;
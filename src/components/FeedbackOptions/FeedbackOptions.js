import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './FeedbackOption.module.css'
function FeedbackOptions({ onClickFeedbackChange, option }) {
  return (
    <div className={styles.container_btn}>
      {
        Object.keys(option).map(button =>
          <Button
            className={styles.btn}
            variant="primary"
            name={button}
            onClick={() => onClickFeedbackChange(button)}
            key={button}>{button}
          </Button>
        )
      }
    </div>
  )
   
}
PropTypes.FeedbackOptions = {
  onClickFeedbackChange: PropTypes.func.isRequired,
  option: PropTypes.object.isRequired,
};
export default FeedbackOptions;
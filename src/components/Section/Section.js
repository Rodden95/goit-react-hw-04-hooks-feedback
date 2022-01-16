import PropTypes from 'prop-types'
function Section({ title }) {
  return (
    <div style={{ marginTop: '20px' }}>
      <h2>{title}</h2>
    </div>
  );
};

PropTypes.Section = {
  title: PropTypes.string.isRequired,
};
export default Section;
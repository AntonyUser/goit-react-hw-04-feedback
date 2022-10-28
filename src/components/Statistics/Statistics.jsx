import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <p>Good:{good}</p>
      <p>Neutrals:{neutral}</p>
      <p>Bad:{bad}</p>
      <p>Total:{total}</p>
      <p>
        Positive feedback:
        {total ? positivePercentage : 0}%
      </p>
    </>
  );
};
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

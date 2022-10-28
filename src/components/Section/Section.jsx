import PropTypes from 'prop-types';
export const Section = ({ title, children }) => {
  return (
    <>
      <section title={title}>{children}</section>
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};

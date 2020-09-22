import React from 'react';
import PropTypes from 'prop-types';

const Education = (props) => {
  const { year, name, dec } = props;
  return (
    <div className="education">
      <div className="year">
        <h4>{year}</h4>
      </div>
      <div className="dec">
        <h4>{name}</h4>
        <p>{dec}</p>
      </div>
    </div>
  );
};
Education.propTypes = {
  year: PropTypes.string,
  name: PropTypes.string,
  dec: PropTypes.string,
};

export default Education;

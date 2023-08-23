import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const Button = ({
  label, type, onClick,
}) => (
  <button className={`button-cell ${type}`} type="button" onClick={() => onClick(label)}>
    {label}
  </button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;

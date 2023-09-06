import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';

const Button = ({ onClick }) => {
  useEffect(() => {
    console.log('Button component is mounted.');

    return () => {
      console.log('Button component will unmount.');
    };
  }, []);

  return (
    <button className={css.Button} onClick={onClick}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;

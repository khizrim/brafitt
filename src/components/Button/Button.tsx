import React from 'react';

import './Button.css';

const Button = ({ cta, isSecondary }: ButtonProps) => {
  return (
    <button
      className={`button ${
        isSecondary ? 'button__type_secondary' : 'button__type_primary'
      }`}
      type="button"
    >
      {cta}
    </button>
  );
};

type ButtonProps = {
  cta: string;
  isSecondary?: boolean;
};

export default Button;

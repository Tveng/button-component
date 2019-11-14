import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from '../css/Button.module.css';
import fontColor from '../css/font-color.module.css';
import background from '../css/background.module.css';

const propTypes = {

  size: PropTypes.oneOf(['sm', 'md', 'lg', null]),

  href: PropTypes.string,

  disabled: PropTypes.bool,

  type: PropTypes.oneOf(['button', 'reset', 'submit', null]),

  as: PropTypes.elementType,

  colorText: PropTypes.string,

  colorButton: PropTypes.string,

};

const defaultProps = {
  size: 'md',
  disabled: false,
  type: 'button',
  colorText: 'red',
  colorButton: 'white',
};

const Button = React.forwardRef(
  (
    { size, className, type, as, colorButton, colorText, ...props },
    ref,
  ) => {
    const classes = classNames(
      className,
      styles[size],
      background[colorButton],
      fontColor[colorText]
    );
    console.log(props);
    if(props.href)
    {
      as = 'a';
    }

    if (!as) {
      props.type = type;
    }

    const Component = as || 'button';
    return <Component {...props} className={classes} />;
  },
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;

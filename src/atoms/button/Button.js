import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./button.module.scss";

const Button = ({ className = "", onClick = () => {}, children, ...rest }) => {
  return (
    <div className={classNames(styles.container)} {...rest}>
      <button className={classNames(styles.btnItem, className)} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

Button.propTypes = {
  className: PropTypes.string, 
  children: PropTypes.node.isRequired, 
  onClick: PropTypes.func
};

export default Button;

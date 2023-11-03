import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./button.module.scss";

const Button = ({ className = "", children, ...rest }) => {
  return (
    <div className={classNames(styles.container, className)} {...rest}>
      <button className={classNames(styles.btnItem, className)}>
        {children}
      </button>
    </div>
  );
};

Button.propTypes = {
  className: PropTypes.string, 
  children: PropTypes.node.isRequired, 
};

export default Button;

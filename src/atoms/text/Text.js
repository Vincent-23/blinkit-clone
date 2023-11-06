import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./text.module.scss";

const Text = ({ className = "", children, ...rest }) => {
  return (
    <div className={classNames(styles.textContainer, className)} {...rest}>
      {children}
    </div>
  );
};

Text.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Text;

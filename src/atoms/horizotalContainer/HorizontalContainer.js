import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./horizontalContainer.module.scss";

const HorizontalContainer = ({ className = "", children, ...rest }) => {
  return (
    <div
      className={classNames(styles.horizontalContainer, className)}
      {...rest}
    >
      {children}
    </div>
  );
};

HorizontalContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default HorizontalContainer;
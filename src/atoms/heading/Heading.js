import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./heading.module.scss";

const Heading = ({ className = "", children, ...rest }) => {
  return (
    <h1 className={classNames(styles.textTag, className)} {...rest}>
      {children}
    </h1>
  );
};

Heading.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Heading;

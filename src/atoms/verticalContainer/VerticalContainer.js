import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./verticalContainer.module.scss";

const VerticalContainer = ({ className = "", childern, ...rest }) => {
  return (
    <div className={classNames(styles.verticalContainer, className)} {...rest}>
      {rest.children}
    </div>
  );
};

VerticalContainer.propTypes = {
  className: PropTypes.string,
  childern: PropTypes.node.isRequired,
};

export default VerticalContainer;

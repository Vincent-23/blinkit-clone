import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./card.module.scss";

const Card = ({ className = "", children, ...rest }) => {
  return (
    <div className={classNames(styles.container, className)} {...rest}>
      {children}
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Card;

import React from "react";
import classNames from "classnames";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import styles from "./logo.module.scss";

const Logo = ({ className = "", to = "/", image }) => {
  return (
    <Link to={to} className={classNames(styles.logoContainer)}>
      <img
        className={classNames(styles.logoSize, className)}
        src={image}
        alt=""
      />
    </Link>
  );
}

Logo.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  image: PropTypes.string
}

export default Logo;

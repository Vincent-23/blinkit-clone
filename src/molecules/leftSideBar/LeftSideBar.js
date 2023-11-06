import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import CardItem from "../cardItem";
import styles from "./leftsideBar.module.scss";

const LeftSideBar = ({ className = "" }) => {
  return <CardItem className={classNames(styles.container, className)} />;
};

LeftSideBar.propTypes = {
  className: PropTypes.string,
};

export default LeftSideBar;

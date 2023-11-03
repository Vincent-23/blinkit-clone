import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./image.module.scss";

const Image = ({ className = "", to = "/", image }) => {
  return (
    <div className={classNames(styles.container, className)}>
      <img className={styles.imageItem} src={image} />
    </div>
  );
};

Image.propTypes = {
  classNames: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Image;

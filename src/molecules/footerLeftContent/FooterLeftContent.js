import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import Text from "../../atoms/text";
import styles from "./footerLeftContent.module.scss";

const FooterLeftContent = ({ className = "" }) => {
  return (
    <Text className={classNames(styles.textContainer, className)}>
      © Blink Commerce Private Limited (formerly known as Grofers India
      <br />
      Private Limited), 2016-2023
    </Text>
  );
};

FooterLeftContent.propTypes = {
  className: PropTypes.string,
};

export default FooterLeftContent;

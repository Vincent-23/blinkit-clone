import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import VerticalContainer from "../../atoms/verticalContainer";
import Text from "../../atoms/text";
import Button from "../../atoms/button";
import styles from "./noCartFound.module.scss";

const NoCartFound = ({ className = "" }) => {
  return (
    <VerticalContainer className={classNames(styles.container, className)}>
      <Text className={classNames(styles.noCartText)}>No Cart Found</Text>
      <Button className={classNames(styles.reDirectBtn)}>
        Continue shopping
      </Button>
    </VerticalContainer>
  );
};

NoCartFound.propTypes = {
  className: PropTypes.string,
};
export default NoCartFound;

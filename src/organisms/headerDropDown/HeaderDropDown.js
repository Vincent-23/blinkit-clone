import React from "react";
import classNames from "classnames";
import VerticalContainer from "../../atoms/verticalContainer";
import HorizontalContainer from "../../atoms/horizotalContainer";
import styles from "./headerDropDown.module.scss";
import Text from "../../atoms/text";
import DropDrown from "../../atoms/dropDown/DropDrown";

const HeaderDropDown = ({ className = "" }) => {
  return (
    <VerticalContainer
      className={classNames(styles.dropDownContainer, className)}
    >
      <HorizontalContainer
        className={classNames(styles.dropDownItem, className)}
      >
        <Text className={classNames(styles.headerText, className)}>
          Buy Chips & Crisps online
        </Text>
        <DropDrown className={classNames(styles.dropDownValues, className)} />
      </HorizontalContainer>
    </VerticalContainer>
  );
};

export default HeaderDropDown;

import React, { useContext } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import VerticalContainer from "../../atoms/verticalContainer";
import HorizontalContainer from "../../atoms/horizotalContainer";
import styles from "./headerDropDown.module.scss";
import Text from "../../atoms/text";
import { ProductContext } from "../../context/ProductContext";
import DropDrown from "../../atoms/dropDown/DropDrown";

const HeaderDropDown = ({ className = "" }) => {
  const { productType } = useContext(ProductContext);
  return (
    <VerticalContainer
      className={classNames(styles.dropDownContainer, className)}
    >
      <HorizontalContainer className={classNames(styles.dropDownItem)}>
        <Text className={classNames(styles.headerText)}>{productType}</Text>
        <DropDrown className={classNames(styles.dropDownValues)} />
      </HorizontalContainer>
    </VerticalContainer>
  );
};

HeaderDropDown.propTypes = {
  classNames: PropTypes.string,
};

export default HeaderDropDown;

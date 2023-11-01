import React from "react";
import classNames from "classnames";
import VerticalContainer from "../../atoms/verticalContainer";
import Logo from "../../atoms/logo";
import Text from "../../atoms/text";
import styles from "./homeProductList.module.scss";
import CartImagePrice from "../../molecules/cartImagePrice/CartImagePrice";
import CartLabelAndPrice from "../../molecules/cartLabelAndPrice/CartLabelAndPrice";
import CartGrandTotal from "../../molecules/cartGrandTotal";
import CartHeader from "../../molecules/CartHeader";

const HomeProductList = ({ className = "" }) => {
  return (
    <VerticalContainer className={classNames(styles.container, className)}>
      <CartHeader />
      <CartImagePrice />
      <CartLabelAndPrice />
      <CartGrandTotal />
    </VerticalContainer>
  );
};

export default HomeProductList;

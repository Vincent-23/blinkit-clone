import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import VerticalContainer from "../../atoms/verticalContainer";
import styles from "./homeProductList.module.scss";
import CartImagePrice from "../../molecules/cartImagePrice/CartImagePrice";
import CartLabelAndPrice from "../../molecules/cartLabelAndPrice/CartLabelAndPrice";
import CartGrandTotal from "../../molecules/cartGrandTotal";
import CartHeader from "../../molecules/CartHeader";

const HomeProductList = ({ className = "" }) => {
  return (
    <VerticalContainer className={classNames(styles.container, className)}>
      <CartHeader className={classNames(styles.container)} />
      <CartImagePrice className={classNames(styles.container)} />
      <CartLabelAndPrice className={classNames(styles.container)} />
      <CartGrandTotal className={classNames(styles.container)} />
    </VerticalContainer>
  );
};

HomeProductList.PropTypes = {
  className: PropTypes.string,
};

export default HomeProductList;

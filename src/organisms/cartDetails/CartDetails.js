import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import map from "lodash/map";
import VerticalContainer from "../../atoms/verticalContainer";
import CartHeader from "../../molecules/CartHeader";
import CartImagePrice from "../../molecules/cartImagePrice";
import CartLabelAndPrice from "../../molecules/cartLabelAndPrice";
import CartGrandTotal from "../../molecules/cartGrandTotal";
import styles from "./cartDetails.module.scss";
import { useSelector } from "react-redux";

const CartImagePriceElement = ({ items }) => {
  return map(items, (cartItem) => (
    <CartImagePrice items={cartItem} type="Cart" />
  ));
};

const CartDetails = ({ className = "" }) => {
  const values = useSelector((state) => state.cart);
  return (
    <VerticalContainer className={classNames(styles.container, className)}>
      <CartHeader className={classNames(styles.headerItem)} />
      <CartImagePriceElement
        items={values.value}
        className={classNames(styles.imagePriceItem)}
      />
      <CartLabelAndPrice className={classNames(styles.labelPriceItem)} />
      <CartGrandTotal className={classNames(styles.grandTotalItem)} />
    </VerticalContainer>
  );
};

CartDetails.propTypes = {
  classNames: PropTypes.string,
};

export default CartDetails;

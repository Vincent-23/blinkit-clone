import React from "react";
import classNames from "classnames";
import VerticalContainer from "../../atoms/verticalContainer";
import CartHeader from "../../molecules/CartHeader";
import CartImagePrice from "../../molecules/cartImagePrice";
import CartLabelAndPrice from "../../molecules/cartLabelAndPrice";
import CartGrandTotal from "../../molecules/cartGrandTotal";
import styles from "./cartDetails.module.scss";
import { useSelector } from "react-redux";

const CartImagePriceElement = ({ items }) => {
  return items.map((cartItem) => <CartImagePrice items={cartItem} type="Cart" />);
};

const CartDetails = ({ className = "" }) => {
  const values = useSelector((state) => state.cart);
  return (
    <VerticalContainer className={classNames(styles.container, className)}>
      <CartHeader />
      <CartImagePriceElement items={values.value} />
      <CartLabelAndPrice />
      <CartGrandTotal />
    </VerticalContainer>
  );
};

export default CartDetails;

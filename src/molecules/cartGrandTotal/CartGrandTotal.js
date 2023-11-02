import React from "react";
import classNames from "classnames";
import VerticalContainer from "../../atoms/verticalContainer";
import HorizontalContainer from "../../atoms/horizotalContainer";
import Text from "../../atoms/text";
import { useSelector } from "react-redux";
import styles from "./cartGrandTotal.module.scss";

const CartGrandTotal = () => {

  const cart = useSelector((state) => state.cart.value);


  const getTotalAmount = () => {
    let total = 0;
    cart.forEach((e) => {
      if (e.quantity) total += e.quantity * e.sellingPrice;
    });
    return total;
    
  }

  


  return (
    <VerticalContainer className={classNames(styles.container)}>
      <HorizontalContainer className={classNames(styles.items)}>
        <Text className={classNames(styles.grandTotal)}>Grand Total</Text>
        <Text className={classNames(styles.totalPrice)}>{`₹ ${getTotalAmount()}`}</Text>
      </HorizontalContainer>
      <Text className={classNames(styles.couponText)}>
        Coupons are only applicable on the Blinkit app
      </Text>
    </VerticalContainer>
  );
};

export default CartGrandTotal;

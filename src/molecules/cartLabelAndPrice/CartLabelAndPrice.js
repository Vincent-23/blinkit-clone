import React from "react";
import classNames from "classnames";
import VerticalContainer from "../../atoms/verticalContainer";
import HorizontalContainer from "../../atoms/horizotalContainer";
import Text from "../../atoms/text";
import { useSelector } from "react-redux";
import styles from "./cartLabelAndPrice.module.scss";

const CartLabelAndPrice = () => {

  const cart = useSelector((state) => state.cart.value);

  const getMRPAmount = () => {
    let total = 0;
    cart.forEach((e) => {
      if (e.quantity) total += e.quantity * e.actualPrice;
    });
    return total;
    
  }

  const getDiscountPrice = () => {
    let total = 0;
    cart.forEach((e) => {
      if (e.quantity && e.actualPrice - e.sellingPrice) total += e.quantity * (e.actualPrice - e.sellingPrice)
    });
    return total;
    
  }

  return (
    <HorizontalContainer className={classNames(styles.container)}>
      <VerticalContainer className={classNames(styles.items)}>
        <Text className={classNames(styles.mrpText)}>MRP</Text>
        <Text className={classNames(styles.deliveryText)}>Delivery change</Text>
        <Text className={classNames(styles.discountText)}>Product discount</Text>
      </VerticalContainer>
      <VerticalContainer className={classNames(styles.items)}>
        <Text className={classNames(styles.mrpValue)}>{`₹ ${getMRPAmount()}`}</Text>
        <Text className={classNames(styles.deliveryCharge)}>Free</Text>
        <Text className={classNames(styles.discount)}>- ₹ {getDiscountPrice()}</Text>
      </VerticalContainer>
    </HorizontalContainer>
  );
};

export default CartLabelAndPrice;

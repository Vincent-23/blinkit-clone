import React from "react";
import classNames from "classnames";
import VerticalContainer from "../../atoms/verticalContainer";
import HorizontalContainer from "../../atoms/horizotalContainer";
import Text from "../../atoms/text";
import styles from "./cartLabelAndPrice.module.scss";

const CartLabelAndPrice = () => {
  return (
    <HorizontalContainer className={classNames(styles.container)}>
      <VerticalContainer className={classNames(styles.items)}>
        <Text className={classNames(styles.mrpText)}>MRP</Text>
        <Text className={classNames(styles.deliveryText)}>Delivery change</Text>
        <Text className={classNames(styles.discountText)}>Product discount</Text>
      </VerticalContainer>
      <VerticalContainer className={classNames(styles.items)}>
        <Text className={classNames(styles.mrpValue)}>₹ 230</Text>
        <Text className={classNames(styles.deliveryCharge)}>Free</Text>
        <Text className={classNames(styles.discount)}>- ₹ 30</Text>
      </VerticalContainer>
    </HorizontalContainer>
  );
};

export default CartLabelAndPrice;

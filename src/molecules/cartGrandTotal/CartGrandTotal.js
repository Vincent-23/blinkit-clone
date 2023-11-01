import React from "react";
import classNames from "classnames";
import VerticalContainer from "../../atoms/verticalContainer";
import HorizontalContainer from "../../atoms/horizotalContainer";
import Text from "../../atoms/text";
import styles from "./cartGrandTotal.module.scss";

const CartGrandTotal = () => {
  return (
    <VerticalContainer className={classNames(styles.container)}>
      <HorizontalContainer className={classNames(styles.items)}>
        <Text className={classNames(styles.grandTotal)}>Grand Total</Text>
        <Text className={classNames(styles.totalPrice)}>₹ 200</Text>
      </HorizontalContainer>
      <Text className={classNames(styles.couponText)}>
        Coupons are only applicable on the Blinkit app
      </Text>
    </VerticalContainer>
  );
};

export default CartGrandTotal;

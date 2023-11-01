import React from "react";
import classNames from "classnames";
import VerticalContainer from "../../atoms/verticalContainer";
import HorizontalContainer from "../../atoms/horizotalContainer";
import Image from "../../atoms/image";
import Text from "../../atoms/text";
import QuantityBtn from "../quantityBtn";
import styles from './cartImagePrice.module.scss'

const CartImagePrice = ({ items }) => {
  return (
    <VerticalContainer className={classNames(styles.container)}>
     
        <HorizontalContainer className={classNames(styles.container)}>
          <Image className={classNames(styles.imageItem)} image={items?.productImage} />
          <VerticalContainer className={classNames(styles.textContainer)}>
            {/* <HorizontalContainer> */}
              <Text className={classNames(styles.titleText)}>{items?.productName}</Text>
              <Text className={classNames(styles.weightText)}>{items?.productQuantity}</Text>
              <Text className={classNames(styles.PriceText)}>{`₹ ${items?.actualPrice}`}</Text>
            {/* </HorizontalContainer> */}
          </VerticalContainer>
          <QuantityBtn />
        </HorizontalContainer>

    </VerticalContainer>
  );
};

export default CartImagePrice;

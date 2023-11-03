import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import VerticalContainer from "../../atoms/verticalContainer";
import Text from "../../atoms/text";
import Image from "../../atoms/image";
import Card from "../../atoms/card";
import CardPriceQuantity from "../cardPriceQuantity";
import styles from "./cardDetails.module.scss";

const CardDetails = ({ className = "", items = [] }) => {
  return (
    <VerticalContainer
      className={classNames(styles.container, className)}
      key={items?.id}
    >
      <Card className={styles.card} key={items?.id}>
        <Image className={styles.image} image={items?.productImage} />
        <Text className={styles.productName}>{items?.productName}</Text>
        <Text className={styles.productQuantity}>{items?.productQuantity}</Text>
        <CardPriceQuantity
          className={styles.priceQuantityItem}
          items={items}
          key={items?.id}
          type="Card"
        />
        <VerticalContainer />
      </Card>
    </VerticalContainer>
  );
};

CardDetails.propTypes = {
  className: PropTypes.string,
  items: PropTypes.array,
};

export default CardDetails;

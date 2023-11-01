import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Heading from "../../atoms/heading";
import styles from './deliveryInfo.module.scss';

export default function DeliveryInfo() {
  return (
    <div className={styles.deliveryInfoContainer}>
      <Heading textSize="lg" textBold="bold">Delivery in 11 minute</Heading>
      <Heading>
        Bengaluru, Karnataka, India{" "}
        <ArrowDropDownIcon className={styles.searchIcon} />
      </Heading>
    </div>
  );
}

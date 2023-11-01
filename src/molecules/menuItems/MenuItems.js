import React from "react";
import VerticalContainer from "../../atoms/verticalContainer";
import HorizontalContainer from "../../atoms/horizotalContainer";
import styles from "./menuItems.module.scss";

const MenuList = (items) => {
  return items.map((items) => (
    <div key={items.id}>
      {items.label}
    </div>
  ));
};

const MenuItems = ({ items }) => {
  return (
    <VerticalContainer className={styles.menuItemsContainer}>
      <HorizontalContainer className={styles.menuItems}>{MenuList(items)}</HorizontalContainer>
    </VerticalContainer>
  );
};

export default MenuItems;

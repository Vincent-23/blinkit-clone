import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import VerticalContainer from "../../atoms/verticalContainer";
import HorizontalContainer from "../../atoms/horizotalContainer";
import MenuList from "./menuItems.helper";
import styles from "./menuItems.module.scss";



const MenuItems = ({ className = "", items = [] }) => {
  return (
    <VerticalContainer
      className={classNames(styles.menuItemsContainer, className)}
    >
      <HorizontalContainer className={classNames(styles.menuItems, className)}>
        <MenuList dataItems={items} />
      </HorizontalContainer>
    </VerticalContainer>
  );
};

MenuItems.propTypes = {
  className: PropTypes.string,
  items: PropTypes.array,
};

export default MenuItems;

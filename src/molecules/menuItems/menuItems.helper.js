import React from "react";
import map from "lodash/map";
import Text from "../../atoms/text";
import PropTypes from "prop-types";
import styles from './menuItems.module.scss';

const MenuList = ({ dataItems }) => {
  return map(dataItems, (items) => <Text className={styles.menuChildItems} key={items.id}>{items.label}</Text>);
};

MenuList.propTypes = {
    dataItems: PropTypes.array,
};

export default MenuList;

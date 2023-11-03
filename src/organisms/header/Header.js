import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import DeliveryInfo from "../../molecules/deliveryInfo";
import SearchBar from "../../atoms/searchBar";
import ListItems from "../../datas/listItems.json";
import Logo from "../../atoms/logo";
import VerticalContainer from "../../atoms/verticalContainer";
import HorizontalContainer from "../../atoms/horizotalContainer";
import Text from "../../atoms/text";
import MenuItems from "../../molecules/menuItems";
import MyCart from "../../molecules/myCart";
import styles from "./header.module.scss";

const Header = ({ className = "" }) => {
  const navigate = useNavigate();

  const handleNavigateToHome = () => {
    navigate("/");
  };
  return (
    <VerticalContainer className={classNames(styles.container, className)}>
      <VerticalContainer className={styles.headerVerticalContainer}>
        <VerticalContainer className="">
          <HorizontalContainer>
            <Logo
              className={styles.navLogo}
              image="/logo.svg"
              onClick={() => handleNavigateToHome()}
            />
            <DeliveryInfo />
            <SearchBar />
            <Text className={styles.navLogin}>Login</Text>
            <MyCart />
          </HorizontalContainer>
        </VerticalContainer>
      </VerticalContainer>
      <MenuItems items={ListItems} />
    </VerticalContainer>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;

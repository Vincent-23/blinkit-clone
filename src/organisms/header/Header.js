import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../context/MyContext";
import DeliveryInfo from "../../molecules/deliveryInfo";
import SearchBar from "../../atoms/searchBar";
import ListItems from "../../datas/listItems.json";
import Logo from "../../atoms/logo";
import VerticalContainer from "../../atoms/verticalContainer";
import HorizontalContainer from "../../atoms/horizotalContainer";
import Text from "../../atoms/text";
import MenuItems from "../../molecules/menuItems";
import Button from '../../atoms/button'
import MyCart from "../../molecules/myCart";
import styles from "./header.module.scss";

const Header = () => {
  const { cartItem } = useContext(MyContext);
  const [cartCount, setCartCount] = useState("");
  const [items, setItems] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setCartCount(cartItem);
  }, [cartItem]);

  const handleNavigateToHome = () => {
    navigate('/');
  }
  return (
    <>
      <VerticalContainer className={styles.headerVerticalContainer}>
        <VerticalContainer className="">
          <HorizontalContainer>
            <Logo className={styles.navLogo}  image="/logo.svg" onClick={() => handleNavigateToHome()}/>
            <DeliveryInfo />
            <SearchBar />
            <Text className={styles.navLogin}>Login</Text>
            <MyCart />
          </HorizontalContainer>
        </VerticalContainer>
      </VerticalContainer>
      <MenuItems items={ListItems} />
    </>
  );
};

export default Header;

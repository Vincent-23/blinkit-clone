import React, { useContext, useEffect, useState } from "react";
import classNames from "classnames";
import VerticalContainer from "../../atoms/verticalContainer";
import HorizontalContainer from "../../atoms/horizotalContainer";
import LeftSideBar from "../../molecules/leftSideBar/LeftSideBar";
import HomeProductList from "../../organisms/homeProductList/HomeProductList";
import styles from "./product.module.scss";
import HeaderDropDown from "../../organisms/headerDropDown/HeaderDropDown";
import CardDetails from "../../molecules/cardDetails";
import { MyContext } from "../../context/MyContext";
import productItems from "../../datas/productItems.json";

const ListingCardProduct = ({ items = [] }) => {
  console.log("element!", items);
  return items?.map((productItem) => (
    <CardDetails
      className={classNames(styles.cardItems)}
      items={productItem}
      key={productItem?.id}
    />
  ));
};

const Products = ({ className = "" }) => {
  const { productType, setProductType } =
    useContext(MyContext);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    console.log('test!',productType)
    const filterData = productType !== 'All'
      ? productItems.filter((items) => items.category === productType)
      : productItems;
    setProductData(filterData );
  }, [productType]);
  console.log("productType!", productType, !!productType);
  

  return (
    <HorizontalContainer className={styles.container}>
      <LeftSideBar />
      <VerticalContainer
        className={classNames(styles.headerDropDown, className)}
      >
        <VerticalContainer>
          <HeaderDropDown className={classNames(styles.dropDownItem)} />
        </VerticalContainer>
        {/* <HomeProductList /> */}
        <VerticalContainer className={classNames(styles.cardsContainer)}>
          <ListingCardProduct items={productData} />
        </VerticalContainer>
      </VerticalContainer>
    </HorizontalContainer>
  );
};

export default Products;

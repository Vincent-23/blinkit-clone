import React, { useContext, useEffect, useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import VerticalContainer from "../../atoms/verticalContainer";
import HorizontalContainer from "../../atoms/horizotalContainer";
import LeftSideBar from "../../molecules/leftSideBar/LeftSideBar";
import styles from "./product.module.scss";
import HeaderDropDown from "../../organisms/headerDropDown/HeaderDropDown";
import { ProductContext } from "../../context/ProductContext";
import ListingCardProduct from './product.helper';
import productItems from "../../datas/productItems.json";


const Products = ({ className = "" }) => {
  const { productType } = useContext(ProductContext);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const filterData =
      productType !== "All"
        ? productItems.filter((items) => items.category === productType)
        : productItems;
    setProductData(filterData);
  }, [productType]);

  return (
    <HorizontalContainer className={styles.container}>
      <LeftSideBar />
      <VerticalContainer
        className={classNames(styles.headerDropDown, className)}
      >
        <VerticalContainer>
          <HeaderDropDown className={classNames(styles.dropDownItem)} />
        </VerticalContainer>
        <VerticalContainer className={classNames(styles.cardsContainer)}>
          <ListingCardProduct items={productData} />
        </VerticalContainer>
      </VerticalContainer>
    </HorizontalContainer>
  );
};

Products.propTypes = {
  className: PropTypes.string,
};

export default Products;

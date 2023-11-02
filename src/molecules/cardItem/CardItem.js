import React, {useContext} from "react";
import classNames from "classnames";
import CategoryItems from "../../datas/CategoryItems.json";
import VerticalContainer from "../../atoms/verticalContainer";
import Horizontailcontainer from "../../atoms/horizotalContainer";
import Image from "../../atoms/image";
import { MyContext } from "../../context/MyContext";
import styles from "./cardItem.module.scss";

const CategoryListElement = ({ className = "", categoryList, setProductType = "" }) => {
  const handleProductData=(itemType)=>{
    setProductType(itemType)
    console.log('itemType!',itemType)
  }
  return categoryList.map((items) => (
    <div
    onClick={() => handleProductData(items?.title)}
      className={classNames(styles.itemContainer, className)}
      // key={items?.id}
     
    >
      <div className={classNames(styles.imageContainer, className)}>
        <Image
          className={classNames(styles.imageItem, className)}
          image={items?.image}
        />
      </div>
      <div className={classNames(styles.textItem, className)}
            // onClick={() => {handleProductData(items?.title); console.log('12!',items?.category)}}
      >
        {items?.title}
      </div>
    </div>
  ));
};

const CardItem = ({ className = "" }) => {
  const { productType, setProductType} = useContext(MyContext);
  return (
    <VerticalContainer className={classNames(styles.container, className)}>
      <CategoryListElement categoryList={CategoryItems} setProductType={setProductType}/>
    </VerticalContainer>
  );
};

export default CardItem;

import React, { useState, useEffect, useContext } from "react";
import classNames from "classnames";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Text from "../../atoms/text";
import { useDispatch, useSelector } from "react-redux";
import { addQuantity, removeQuantity } from "../../stores/cartSlice";

import styles from "./quantity.module.scss";

const QuantityBtn = ({ className = "", item = {}, type = "" }) => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.value);

  const handleAdd = () => {
    dispatch(addQuantity(item));
  };

  const handleReduce = () => {
    dispatch(removeQuantity(item));
  };

  return (
    <horizontalContainer className={classNames(styles.container, className)}>
      {cart.find(e => e.id === item.id) ? (
         <>
         <RemoveIcon
           className={classNames(styles.minusBtnItem, className)}
           onClick={handleReduce}
         />
         <Text className={classNames(styles.quantityTextItem, className)}>
           {cart.find(e => e.id === item.id)?.quantity}
         </Text>
         <AddIcon
           className={classNames(styles.addBtnItem, className)}
           onClick={handleAdd}
         />
       </>
      ) : (
        <Text onClick={handleAdd}>Add</Text>
      )}
     
    </horizontalContainer>
  );
};

export default QuantityBtn;

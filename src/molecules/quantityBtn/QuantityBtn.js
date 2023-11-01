import React, { useState } from "react";
import classNames from "classnames";
import Button from "../../atoms/button/Button";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Verticalcontainer from "../../atoms/verticalContainer";
import Text from "../../atoms/text";
import horizontalContainer from "../../atoms/horizotalContainer";
import { useDispatch, useSelector } from "react-redux";
import { addCart, removeCart } from "../../stores/cartSlice";

import styles from "./quantity.module.scss";

const QuantityBtn = ({ className = "", items = {} }) => {

  const dispatch = useDispatch();



  const [ isAdding, setIsAdding] = useState();

  const[count, setCount] = useState({})
  const handleAddCart=(items) =>{
    
    setIsAdding({...isAdding, [items.id]: true})
    
    console.log({...count,[items.id]: 1})
    setCount({...count,[items.id]: 1})
    
    
    
    dispatch(addCart({...items}))
  }


  

  const handleAddQuantity = (items) => {

    setCount({...count, [items.id] : count[items.id] + 1})

    dispatch(addCart({...items}))

   
   
    
  }
const handleDecrement = (items) =>{
  setCount({...count,[items.id]: count[items.id] - 1})
  dispatch(removeCart({...items}))
}


  return (
    <horizontalContainer className={classNames(styles.container, className)}>
      {!isAdding ? (
        <Text onClick={() => handleAddCart(items)}>Add</Text>
        // <button onClick={()=> handleAddCart(items)}> ADD</button>
      ) : (
        <>
          <RemoveIcon className={classNames(styles.minusBtnItem, className)} onClick={()=> handleDecrement(items)} />
          <Text className={classNames(styles.quantityTextItem, className)}>
            {count[items.id]}
          </Text>
          <AddIcon className={classNames(styles.addBtnItem, className)} onClick={() => handleAddQuantity(items)}/>
        </>
      )}
    </horizontalContainer>
  );
};

export default QuantityBtn;

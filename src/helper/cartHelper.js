import { useSelector } from "react-redux";

export default function CartHelper() {
  const cart = useSelector((state) => state.cart.value);

  const getMRPAmount = () => {
    let total = 0;
    cart.forEach((e) => {
      if (e.quantity) total += e.quantity * e.actualPrice;
    });
    return total;
  };

  const getDiscountPrice = () => {
    let total = 0;
    cart.forEach((e) => {
      if (e.quantity && e.actualPrice - e.sellingPrice)
        total += e.quantity * (e.actualPrice - e.sellingPrice);
    });
    return total;
  };

  const getTotalAmount = () => {
    let total = 0;
    cart.forEach((e) => {
      if (e.quantity) total += e.quantity * e.sellingPrice;
    });
    return total;
  };

  const getTotalQuantity = () => {
    let quantity = 0;
    cart.forEach((e) => {
      if (e.quantity) quantity += e.quantity;
    });
    return quantity;
  };


  return { getMRPAmount, getDiscountPrice, getTotalAmount, getTotalQuantity };
}

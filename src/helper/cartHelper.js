import { useSelector } from "react-redux";

export default function Helper() {
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

  return getMRPAmount, getDiscountPrice;
}

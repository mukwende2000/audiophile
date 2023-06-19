import { useDispatch, useSelector } from "react-redux";
import { clearCart, calculateTotal } from "../../../store/CartSlice";
import { RootState } from "../../../store/store";

function CartHeader() {
  const cartList = useSelector((state: RootState) => state.cart.cartList);
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(clearCart());
    dispatch(calculateTotal());
  }
  return (
    <div className="flex justify-between">
      <h1 className="uppercase text-dark text-lg">cart({cartList.length})</h1>
      <button onClick={handleClick} className="underline text-gray">
        Remove all
      </button>
    </div>
  );
}

export default CartHeader;

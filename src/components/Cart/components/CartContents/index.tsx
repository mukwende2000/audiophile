import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import {
  CartItem,
  decreaseItemQuantity,
  increaseItemQuantity,
  calculateTotal,
  UpdateCartItemPayload,
  AddCartItemPayload,
} from "../../../../store/CartSlice";
import { Product } from "../../../../utils/ProductType";

function index() {
  const cartList = useSelector((state: RootState) => state.cart.cartList);
  const dispatch = useDispatch();

  function handleDecreaseQuantity(item: any) {
    dispatch(decreaseItemQuantity(item));
    dispatch(calculateTotal());
  }

  function handleIncreaseQuantity(item: any) {
    dispatch(increaseItemQuantity(item));
    dispatch(calculateTotal());
  }

  return cartList.length < 1 ? (
    <p className="grid place-items-center my-10 text-gray text-lg ">
      Your Cart is Empty
    </p>
  ) : (
    <div>
      {cartList.map((item: CartItem) => {
        return (
          <div
            key={item.product.id}
            className="flex items-center justify-between  my-3"
          >
            <div className="w-16 overflow-hidden rounded-lg">
              <img className="w-full" src={item.product.cartImage} alt="" />
            </div>
            <div className="mr-5 text-center">
              <p className="text-dark">{item.product.short}</p>
              <p className="text-dark">{item.product.price}</p>
            </div>
            <div className="flex justify-center items-center rounded-md bg-gray">
              <button
                className="rounded-md text-3xl px-3 hover:text-primary bg-gray"
                onClick={() => handleDecreaseQuantity(item.product)}
              >
                -
              </button>
              <p className="px-2">{item.quantity}</p>
              <button
                className=" px-3 hover:text-primary bg-gray"
                onClick={() => handleIncreaseQuantity(item.product)}
              >
                +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default index;

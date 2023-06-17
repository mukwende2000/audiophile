import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import {
  CartItem,
  clear,
  increaseQuantity,
  decreaseQuantity,
  calculateTotal,
  toggle,
} from "../../store/CartSlice";
import { Product } from "../../utils/ProductType";
import { useState } from "react";
import { Link } from "react-router-dom";

function index() {
  const cart = useSelector((state: RootState) => state.cart.cart);
  const total = useSelector((state: RootState) => state.cart.total);
  const dispatch = useDispatch<AppDispatch>();
  const [isDisabled, setIsDisabled] = useState(cart.length < 1);
  return (
    <div
      className={`absolute top-48 md:left-[73%] left-[50%] translate-x-[-50%] z-[100] w-10/12 max-w-[25rem] p-7 rounded-lg bg-secondary md:bg-black shadow-xl`}
    >
      <div className="flex justify-between">
        <h1 className="uppercase text-dark md:text-secondary text-lg">
          cart({cart.length})
        </h1>
        <button
          onClick={() => {
            dispatch(clear());
            dispatch(calculateTotal());
          }}
          className="underline text-gray"
        >
          Remove all
        </button>
      </div>
      {cart.length < 1 ? (
        <p className="grid place-items-center my-10 text-gray text-lg ">
          Your Cart is Empty
        </p>
      ) : (
        <div>
          {cart.map((product: CartItem) => {
            return (
              <div className="flex items-center justify-between  my-3">
                <div className="w-16 overflow-hidden rounded-lg">
                  <img className="w-full" src={product.item.cartImage} alt="" />
                </div>
                <div className="mr-5 text-center">
                  <p>{product.item.short}</p>
                  <p>{product.item.price}</p>
                </div>
                <div className="flex justify-center items-center rounded-md bg-gray">
                  <button
                    className="rounded-md text-3xl px-3 hover:text-primary bg-gray"
                    onClick={() => {
                      dispatch(decreaseQuantity(product.item));
                      dispatch(calculateTotal());
                    }}
                  >
                    -
                  </button>
                  <p className="px-2">{product.quantity}</p>
                  <button
                    onClick={() => {
                      dispatch(increaseQuantity(product.item));
                      dispatch(calculateTotal());
                    }}
                    className=" px-3 hover:text-primary bg-gray"
                  >
                    +
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <div className="flex justify-between">
        <p className="uppercase text-gray">total</p>
        <p className="text-dark md:text-secondary font-bold text-lg">
          $ {total}
        </p>
      </div>
      <Link to="checkout">
        <button
          onClick={() => dispatch(toggle())}
          disabled={isDisabled}
          className={`uppercase ${
            isDisabled ? "bg-primary/70" : "bg-primary"
          }  text-secondary py-3 mt-5 w-full`}
        >
          checkout
        </button>
      </Link>
    </div>
  );
}

export default index;

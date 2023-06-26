import Cart from "../../../Cart";
import { toggleCart } from "../../../../store/CartSlice";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/store";

function index() {
  const cartList = useSelector((state: RootState) => state.cart.cartList);
  const isOpen = useSelector((state: RootState) => state.cart.isOpen);
  const dispatch = useDispatch();
  return (
    <div>
      {isOpen && <Cart />}
      <button onClick={() => dispatch(toggleCart())} className="relative">
        {cartList.length > 0 && (
          <span className="bg-primary p-1 rounded-full w-6 h-6 flex justify-center items-center text-secondary absolute -bottom-2 left-5">
            {cartList.length}
          </span>
        )}
        <AiOutlineShoppingCart className="text-3xl hover:text-primary cursor-pointer duration-200" />
      </button>
    </div>
  );
}

export default index;

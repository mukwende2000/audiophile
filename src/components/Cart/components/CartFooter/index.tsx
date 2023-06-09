import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../../../store/store";
import { toggleCart } from "../../../../store/CartSlice";
import { formatPrice } from "../../../../utils/formatPrice";

function index() {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-between">
        <p className="uppercase text-gray">total</p>
        <p className="text-dark font-bold text-lg">
          ${formatPrice(cart.total)}
        </p>
      </div>
      <button
        onClick={() => {
          dispatch(toggleCart());
          navigate("checkout");
        }}
        disabled={cart.buttonState === "off"}
        className={`uppercase ${
          cart.buttonState === "off" ? "bg-primary/70" : "bg-primary"
        }  text-secondary py-3 mt-5 w-full`}
      >
        checkout
      </button>
    </>
  );
}

export default index;

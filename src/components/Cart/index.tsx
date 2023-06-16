import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { clear } from "../../store/CartSlice";

function index() {
  const cart = useSelector((state: RootState) => state.cart.cart);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div
      className={`absolute top-48 md:left-[73%] left-[50%] translate-x-[-50%] z-[100] w-10/12 max-w-[25rem] p-7 rounded-lg bg-secondary md:bg-black shadow-xl`}
    >
      <div className="flex justify-between">
        <h1 className="uppercase text-dark md:text-secondary text-lg">
          cart({cart.length})
        </h1>
        <button
          onClick={() => dispatch(clear())}
          className="underline text-gray"
        >
          Remove all
        </button>
      </div>
      <p className="grid place-items-center my-10 text-gray text-lg ">
        Your Cart is Empty
      </p>

      <div className="flex justify-between">
        <p className="uppercase text-gray">total</p>
        <p className="text-dark md:text-secondary font-bold text-lg">$ 0</p>
      </div>
      <button
        disabled
        className={`uppercase bg-primary border text-secondary py-3 mt-5 w-full`}
      >
        checkout
      </button>
    </div>
  );
}

export default index;

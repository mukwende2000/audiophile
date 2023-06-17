import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Navbar from "../Navbar";
import Cart from "../Cart";

import { FaBars } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";

import logo from "/shared/desktop/logo.svg";
import { AppDispatch, RootState } from "../../store/store";
import { toggle } from "../../store/CartSlice";
import { openMenu, closeMenu } from "../../store/MenuSlice";

function index() {
  const isOpen = useSelector((state: RootState) => state.cart.isOpen);
  const cart = useSelector((state: RootState) => state.cart.cart);
  const isActive = useSelector((state: RootState) => state.menu.isActive);
  const dispatch = useDispatch<AppDispatch>();

  const { pathname } = useLocation();

  return (
    <header className="bg-black/90 text-white">
      <div className="container">
        <div className="py-5 flex justify-between items-center border-b border-gray">
          <button
            onClick={() => {
              if (isActive) {
                dispatch(closeMenu());
              } else {
                dispatch(openMenu());
              }
            }}
            className="cursor-pointer text-xl md:hidden"
          >
            <FaBars />
          </button>
          <div>
            <Link to="/">
              <img src={logo} alt="AudioPhile Logo" />
            </Link>
          </div>
          <Navbar />
          <div>
            {isOpen && <Cart />}
            <button onClick={() => dispatch(toggle())} className="relative">
              <span className="bg-primary p-1 rounded-full w-6 h-6 flex justify-center items-center text-secondary absolute -bottom-2 left-5">
                {cart.length}
              </span>
              <AiOutlineShoppingCart className="text-3xl hover:text-primary cursor-pointer duration-200" />
            </button>
          </div>
        </div>
        {pathname === "/" ? null : pathname.includes("%") ? null : (
          <h1 className="text-center text-3xl font-manrope font-800 py-8">
            {pathname.slice(1).toUpperCase()}
          </h1>
        )}
      </div>
    </header>
  );
}

export default index;

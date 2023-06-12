import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Navbar from "../Navbar";
// import Cart from "../Cart";

import { FaBars } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";

import logo from "../../assets/shared/desktop/logo.svg";

function index() {
  const { pathname } = useLocation();
  const [menuIsOpen, setMenuIsOpen] = useState(true);

  return (
    <header className="bg-black text-white">
      <div className="container">
        <div className="py-10 flex justify-between items-center border-b">
          <button className="cursor-pointer text-xl md:hidden">
            <FaBars onClick={() => setMenuIsOpen((prev) => !prev)} />
          </button>
          <div>
            <Link to="/">
              <img src={logo} alt="AudioPhile Logo" />
            </Link>
          </div>
          <Navbar menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
          <div>
            {/* {<Cart />} */}
            <button className="relative">
              <span className="bg-primary p-1 rounded-full w-6 h-6 flex justify-center items-center text-secondary absolute -bottom-2 left-5"></span>
              <AiOutlineShoppingCart className="text-3xl hover:text-primary cursor-pointer duration-200" />
            </button>
          </div>
        </div>
        {pathname != "/" ? (
          <h1 className="text-center text-3xl font-manrope font-800 py-8">
            {pathname.slice(1).toUpperCase()}
          </h1>
        ) : (
          <h1>Homepage</h1>
        )}
      </div>
    </header>
  );
}

export default index;

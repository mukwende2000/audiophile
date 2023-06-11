import LinkItem from "./components/LinkItem";
import logo from "../../assets/logo.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import speaker from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphone from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import headphones from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import useMediaQuery from "../../hooks/useMediaQuery";
import { MouseEventHandler, useState } from "react";
import { cartItems } from "../Header";
import { Cart } from "../../layouts/RootLayout";

type Props = {
  cart: Cart;
  onCartIconClick: MouseEventHandler;
};

function index({ onCartIconClick, cart }: Props) {
  const md = useMediaQuery("(min-width: 768px)");
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <nav
      className={`flex justify-between items-center py-8 border-b border-gray-400`}
    >
      <button className="cursor-pointer text-xl md:hidden">
        <FaBars onClick={() => setMenuIsOpen((prev) => !prev)} />
      </button>
      <div>
        <img className="invert" src={logo} alt="AudioPhile Logo" />
      </div>
      <ul
        className={`py-10 md:flex gap-5 mb-5 absolute ${
          menuIsOpen ? "top-20" : "-top-[calc(100%+150px)]"
        } right-0 left-0 ${!md && "bg-secondary"} md:static duration-500`}
      >
        {md && <LinkItem setMenuIsOpen={setMenuIsOpen} path="/" name="Home" />}
        <LinkItem
          setMenuIsOpen={setMenuIsOpen}
          path="headphones"
          name="Headphones"
          url={headphones}
        />
        <LinkItem
          setMenuIsOpen={setMenuIsOpen}
          path="speakers"
          name="Speakers"
          url={speaker}
        />
        <LinkItem
          setMenuIsOpen={setMenuIsOpen}
          path="earphones"
          name="Earphones"
          url={earphone}
        />
      </ul>
      <button className="relative">
        {cart.items.length > 0 && (
          <span className="bg-primary p-1 rounded-full w-6 h-6 flex justify-center items-center text-secondary absolute -bottom-2 left-5">
            {cart.items.length}
          </span>
        )}

        <AiOutlineShoppingCart
          className="text-3xl hover:text-primary cursor-pointer duration-200"
          onClick={onCartIconClick}
        />
      </button>
    </nav>
  );
}

export default index;

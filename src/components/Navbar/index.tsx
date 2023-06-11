import LinkItem from "./components/LinkItem";
import logo from "../../assets/logo.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import speaker from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphone from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import headphones from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import useMediaQuery from "../../hooks/useMediaQuery";
import { useState } from "react";
import Cart from "../../components/Cart";
import { Link } from "react-router-dom";

function index() {
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
        <Link to="/" onClick={() => setMenuIsOpen(false)}>
          <img className="invert" src={logo} alt="AudioPhile Logo" />
        </Link>
      </div>
      <ul
        className={`overflow-hidden z-10 top-24 py-15 md:flex gap-5 absolute ${
          menuIsOpen ? "h-full" : "h-0"
        } right-0 left-0 ${!md && "bg-secondary"} md:static duration-500`}
      >
        {md && <LinkItem setMenuIsOpen={setMenuIsOpen} path="/" name="Home" />}
        <LinkItem
          alt="A pair of headphones"
          setMenuIsOpen={setMenuIsOpen}
          path="headphones"
          name="Headphones"
          url={headphones}
        />
        <LinkItem
          alt="Audio speakers"
          setMenuIsOpen={setMenuIsOpen}
          path="speakers"
          name="Speakers"
          url={speaker}
        />
        <LinkItem
          alt=""
          setMenuIsOpen={setMenuIsOpen}
          path="earphones"
          name="Earphones"
          url={earphone}
        />
      </ul>
      <div>
        <Cart />
        <button className="relative">
          <span className="bg-primary p-1 rounded-full w-6 h-6 flex justify-center items-center text-secondary absolute -bottom-2 left-5"></span>

          <AiOutlineShoppingCart className="text-3xl hover:text-primary cursor-pointer duration-200" />
        </button>
      </div>
    </nav>
  );
}

export default index;

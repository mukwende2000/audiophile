import LinkItem from "./components/LinkItem";
import logo from "../../assets/logo.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaBars } from "react-icons/fa";

function index() {
  return (
    <nav className="flex justify-between">
      <FaBars />
      <div>
        <img src={logo} alt="AudioPhile Logo" />
      </div>
      <ul className="md:flex mb-5 hidden">
        <LinkItem path="/" name="Home" />
        <LinkItem path="headphones" name="Headphones" />
        <LinkItem path="speakers" name="Speakers" />
        <LinkItem path="earphones" name="Earphones" />
      </ul>
      <AiOutlineShoppingCart className="text-5xl" />
    </nav>
  );
}

export default index;

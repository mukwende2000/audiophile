import Navbar from "../Navbar";
import Container from "../Container";
import Logo from "../Logo";
import Hamburger from "./components/Hamburger";
import CartBtn from "./components/CartBtn";
import Heading from "./components/Heading";

function index() {
  return (
    <header className="bg-black/90 text-white">
      <Container>
        <div className="py-5 flex justify-between items-center border-b border-gray">
          <Hamburger />
          <Logo />
          <Navbar />
          <CartBtn />
        </div>
        <Heading />
      </Container>
    </header>
  );
}

export default index;

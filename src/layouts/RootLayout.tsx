import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import About from "../components/About";
import LinkItem from "../components/Navbar/components/LinkItem";
import speaker from "/shared/desktop/image-category-thumbnail-speakers.png";
import earphone from "/shared/desktop/image-category-thumbnail-earphones.png";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import Backdrop from "../components/Backdrop/Backdrop";
import { toggle } from "../store/CartSlice";

function RootLayout() {
  const { pathname } = useLocation();
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  function handleBackdropClick() {
    dispatch(toggle());
  }

  return (
    <div>
      <Header />
      {cart.isOpen && <Backdrop onBackdropClick={handleBackdropClick} />}
      <main>
        <Outlet />
      </main>
      {pathname !== "/checkout" && <About />}
      <Footer />
    </div>
  );
}

export default RootLayout;

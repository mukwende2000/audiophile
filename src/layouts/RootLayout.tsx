import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import About from "../components/About";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import Backdrop from "../components/Backdrop/Backdrop";
import { toggleCart } from "../store/CartSlice";
import { useEffect } from "react";

function RootLayout() {
  const { pathname } = useLocation();
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div>
      <Header />
      {cart.isOpen && (
        <Backdrop onBackdropClick={() => dispatch(toggleCart())} />
      )}
      <main>
        <Outlet />
      </main>
      {pathname !== "/checkout" && <About />}
      <Footer />
    </div>
  );
}

export default RootLayout;

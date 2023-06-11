import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header, { CartItem, cartItems } from "../components/Header";
import Cart from "../components/Cart/Cart";
import Backdrop from "../components/Backdrop/Backdrop";
import { useState } from "react";

export type Cart = { open: boolean; items: CartItem[] };
function RootLayout() {
  const [totalPrice, setTotalPrice] = useState<number>();
  const [cart, setCart] = useState<Cart>({
    open: false,
    items: cartItems,
  });

  function handleCartIconClick() {
    setCart({ ...cart, open: true });
  }
  function handleBackdropClick() {
    setCart({ ...cart, open: false });
  }
  return (
    <div>
      <Header cart={cart} onCartIconClick={handleCartIconClick} />
      {cart.open && <Backdrop onBackdropClick={handleBackdropClick} />}
      {cart.open && <Cart cart={cart} setCart={setCart} />}
      <main className="text-4xl">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default RootLayout;

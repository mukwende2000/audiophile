import { useLocation } from "react-router-dom";
import Navbar from "../Navbar";
import { MouseEventHandler } from "react";

import zx7 from "../../assets/product-zx7-speaker/mobile/image-product.jpg";
import xx99 from "../../assets/product-xx99-mark-one-headphones/mobile/image-product.jpg";
import { Cart } from "../../layouts/RootLayout";

export type CartItem = {
  name: string;
  id: string;
  quantity: number;
  price: number;
  url: string;
};

export const cartItems: CartItem[] = [
  {
    id: "ere",
    name: "zx7",
    quantity: 1,
    price: 3_500,
    url: zx7,
  },
  {
    id: "892",
    name: "xx99",
    quantity: 1,
    price: 1_899,
    url: xx99,
  },
];

type Props = {
  cart: Cart;
  onCartIconClick: MouseEventHandler;
};
function index({ onCartIconClick, cart }: Props) {
  const { pathname } = useLocation();

  return (
    <header className="bg-black text-white">
      <div className="container">
        <Navbar cart={cart} onCartIconClick={onCartIconClick} />
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

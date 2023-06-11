import { Cart as Carttype } from "../../layouts/RootLayout";

type Props = {
  setCart: React.Dispatch<React.SetStateAction<Carttype>>;
  cart: Carttype;
};
function Cart({ setCart, cart }: Props) {
  return (
    <div
      className={`absolute top-28 w-10/12 max-w-[30rem] p-7 rounded-lg bg-secondary`}
    >
      <div className="flex justify-between">
        <h1 className="uppercase font-bold text-xl">
          cart({cart.items.length})
        </h1>
        {cart.items.length > 0 && (
          <button
            onClick={() => {
              setCart({ ...cart, items: [] });
              console.log(cart.items);
            }}
            className="underline text-gray"
          >
            Remove all
          </button>
        )}
      </div>
      {cart.items.length < 1 ? (
        <p className="grid place-items-center my-10 text-gray text-lg ">
          Your Cart is Empty
        </p>
      ) : (
        <ul className="my-10">
          {cart.items.map((item, index, arr) => {
            return (
              <li
                className={`${
                  index !== 0 || index !== arr.length - 1 ? "my-5" : null
                } grid grid-cols-2 place-items-center `}
                key={item.id}
              >
                <div className="grid grid-cols-2 place-items-center">
                  <div>
                    <img src={item.url} alt={item.name} />
                  </div>

                  <div>
                    <p className="uppercase font-bold text-lg">
                      <small>{item.name}</small>
                    </p>
                    <p className="font-bold text-gray text-lg">
                      <small> $ {item.price}</small>
                    </p>
                  </div>
                </div>
                <div className="bg-gray/40 flex justify-between px-3 py-1 rounded w-6/12">
                  <button>-</button>
                  <p>{item.quantity}</p>
                  <button>+</button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <div className="flex justify-between">
        <p className="uppercase text-gray">total</p>
        <p className="text-dark font-bold text-lg">$ 0</p>
      </div>
      <button
        disabled
        className={`${
          cart.items.length
            ? "opacity-1 cu rsor-pointer hover:bg-transparent hover:text-primary border-primary"
            : "opacity-60"
        } uppercase bg-primary border text-secondary py-3 mt-5 w-full`}
      >
        checkout
      </button>
    </div>
  );
}

export default Cart;

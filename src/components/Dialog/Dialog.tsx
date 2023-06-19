import { useEffect, useRef, useState } from "react";
import { FaCheck } from "react-icons/fa";
import OrderedItem from "../../routes/Checkout/components/Summary/OrderedItem";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { formatPrice } from "../../utils/formatPrice";
import LinkBtn from "../LinkBtn";
import { clear } from "../../store/CartSlice";
import { useNavigate } from "react-router-dom";

function Dialog() {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [viewingAll, setViewingAll] = useState(false);
  const total = useSelector((state: RootState) => state.cart.total);
  const cartList = useSelector((state: RootState) => state.cart.cartList);
  const isSubmitted = useSelector((state: RootState) => state.form.isSubmitted);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const firstItem = cartList[0];

  useEffect(() => {
    if (isSubmitted) {
      dialogRef.current?.showModal();
    } else {
      return () => dialogRef.current?.close();
    }
  }, [isSubmitted]);

  return (
    <dialog ref={dialogRef} className="rounded-lg px-10">
      <FaCheck className="bg-primary rounded-full w-16 h-16 my-5 text-secondary" />
      <h3 className="text-4xl w-7/12 font-[500] uppercase">
        Thank you for your order
      </h3>
      <p className="text-gray my-5">
        You will recieve an email confiramtion shortly.
      </p>
      <div className="my-5 flex rounded-lg overflow-hidden">
        <div className="bg-gray/20 p-7">
          {!viewingAll ? (
            <div>
              <OrderedItem
                url={firstItem.product.cartImage}
                shortName={firstItem.product.short}
                quantity={firstItem.quantity}
                price={firstItem.product.price}
              />
            </div>
          ) : (
            cartList.map((item) => {
              return (
                <OrderedItem
                  key={item.product.id}
                  url={item.product.cartImage}
                  shortName={item.product.short}
                  quantity={item.quantity}
                  price={item.product.price}
                />
              );
            })
          )}
          {cartList.length > 1 && (
            <button
              type="button"
              className="border-t w-full text-xs font-bold py-2 text-gray hover:underline"
              onClick={(e) => {
                e.preventDefault();
                setViewingAll((prev) => !prev);
              }}
            >
              {viewingAll
                ? `view less`
                : `and ${cartList.length - 1} other item(s)`}
            </button>
          )}
        </div>
        <div className="px-10 ml-1 bg-dark text-secondary grid place-content-center">
          <p className=" uppercase text-gray">grand total</p>
          <p className="font-bold text-2xl ">$ {formatPrice(total + 50)}</p>
        </div>
      </div>
      <LinkBtn
        width="w-full"
        btn
        handleClick={() => {
          dispatch(clear());
          navigate("/");
        }}
        backgroundColor="bg-primary"
        color="text-secondary"
      >
        Back to home
      </LinkBtn>
    </dialog>
  );
}

export default Dialog;

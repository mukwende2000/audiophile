import LinkBtn from "../../../../components/LinkBtn";
import SummaryDetails from "./SummaryDetails";
import OrderSummary from "../OrderSummary";
import OrderedItem from "./OrderedItem";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { CartItem } from "../../../../store/CartSlice";

function Summary() {
  const cart = useSelector((state: RootState) => state.cart);
  return (
    <div className="basis-[33%] bg-secondary p-10 rounded">
      <OrderSummary />
      <h2 className="text-xl uppercase">summary</h2>
      <div>
        {cart.cart.map((item: CartItem) => {
          return (
            <OrderedItem
              url={item.item.cartImage}
              shortName={item.item.short}
              price={item.item.price}
              quantity={item.quantity}
            />
          );
        })}
      </div>
      <div className="mb-5">
        <SummaryDetails property="total" value={cart.total} />
        <SummaryDetails property="shipping" value="$ 50" />
        <SummaryDetails property="vat(included)" value="$199.8" />
        <SummaryDetails property="grand total" value="$645" />
      </div>
      <LinkBtn
        width="w-full"
        backgroundColor="bg-primary"
        color="text-secondary"
        text="continue and pay"
      />
    </div>
  );
}

export default Summary;

import LinkBtn from "../../../../components/LinkBtn";
import SummaryDetails from "./SummaryDetails";
import OrderedItem from "./OrderedItem";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { CartItem } from "../../../../store/CartSlice";
import { formatPrice } from "../../../../utils/formatPrice";

function Summary() {
  const cartList = useSelector((state: RootState) => state.cart.cartList);
  const total = useSelector((state: RootState) => state.cart.total);
  const isSubmitting = useSelector(
    (state: RootState) => state.form.isSubmitting
  );
  return (
    <div className="basis-[33%] bg-secondary p-10 rounded">
      <h2 className="text-xl uppercase">summary</h2>
      <div className="max-h-80 overflow-auto">
        {cartList.map((item: CartItem) => {
          return (
            <OrderedItem
              key={item.product.id}
              url={item.product.cartImage}
              shortName={item.product.short}
              price={item.product.price}
              quantity={item.quantity}
            />
          );
        })}
      </div>
      <div className="mb-5">
        <SummaryDetails property="total" value={`$ ${formatPrice(total)}`} />
        <SummaryDetails property="shipping" value="$ 50" />
        <SummaryDetails property="vat(included)" value="$199.8" />
        <SummaryDetails
          property="grand total"
          value={`$ ${formatPrice(total + 50)}`}
        />
      </div>
      <LinkBtn
        btn
        width="w-full"
        backgroundColor="bg-primary"
        color="text-secondary"
      >
        {isSubmitting ? "submitting..." : "continue and pay"}
      </LinkBtn>
    </div>
  );
}

export default Summary;

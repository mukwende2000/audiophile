import Button from "../../../../components/Button/Button";
import SummaryDetails from "./SummaryDetails";
import random from "../../../../assets/cart/image-zx7-speaker.jpg";
import OrderSummary from "../OrderSummary";

function Summary() {
  return (
    <div className="basis-[33%] bg-secondary p-10 rounded">
      <OrderSummary />
      <h2 className="text-xl uppercase">summary</h2>
      <div className="my-10 flex justify-between">
        <div className="flex items-center gap-5">
          <div className="basis-[50%]">
            <img src={random} alt="" />
          </div>
          <div className="basis-full">
            <p className="font-bold uppercase">xy1</p>
            <p>$ 599</p>
          </div>
        </div>
        <p>x1</p>
      </div>
      <div className="mb-5">
        <SummaryDetails property="total" value="$599" />
        <SummaryDetails property="shipping" value="$ 50" />
        <SummaryDetails property="vat(included)" value="$199.8" />
        <SummaryDetails property="grand total" value="$645" />
      </div>
      <Button
        width="w-full"
        backgroundColor="bg-primary"
        color="text-secondary"
        text="continue and pay"
      />
    </div>
  );
}

export default Summary;

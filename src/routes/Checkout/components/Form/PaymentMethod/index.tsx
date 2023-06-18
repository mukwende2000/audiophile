import { useState } from "react";
import Input from "../../Input";
import Radio from "./Radio/Radio";
import { FaRegHandshake } from "react-icons/fa";
function index() {
  const [paymentMethod, setPaymentMethod] = useState("e Money");
  return (
    <fieldset className="lg:border border-gray rounded lg:p-7">
      <legend className="mb-5 lg:mb-0 text-primary uppercase text-sm">
        payment details
      </legend>
      <div className="lg:grid grid-cols-2 gap-5">
        <div className="text-sm font-bold">Payment Method</div>
        <div className="border border-gray my-4 lg:border-none p-2 rounded flex flex-col">
          <Radio
            setPaymentMethod={setPaymentMethod}
            value="e Money"
            defaultChecked
          />
          <Radio setPaymentMethod={setPaymentMethod} value="Cash on Delivery" />
        </div>
        {paymentMethod === "e Money" ? (
          <>
            <Input
              type="number"
              name="e-Money Number"
              placeholder="238934342"
              id="e-Money Number"
            />
            <Input
              type="number"
              name="e-Money PIN"
              id="e-Monney PIN"
              placeholder="9891"
            />
          </>
        ) : (
          <div className="flex gap-5 col-start-1 col-end-3">
            <FaRegHandshake className="basis-[20%] text-primary text-5xl" />
            <p className="text-gray basis-full">
              The 'Cash on Delivery' option enables you to pay in cash When our
              delivery counter arrives at your residence. Just make sure your
              address is correctso that your order will not be cancelled
            </p>
          </div>
        )}
      </div>
    </fieldset>
  );
}

export default index;
